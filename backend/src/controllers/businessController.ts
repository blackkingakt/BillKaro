import { Request, Response } from 'express';
import prisma from '../config/database';
import { validateGSTIN } from '../utils/gst.utils';

export const upsertBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }

        const {
            name,
            legalName,
            gstin,
            pan,
            addressLine1,
            addressLine2,
            city,
            state,
            pincode,
            email,
            phone,
            website,
            logoUrl,
            upiId,
            bankName,
            bankAccountNo,
            bankIfsc,
            termsAndConditions,
            invoicePrefix
        } = req.body;

        // Validate required fields
        if (!name) {
            res.status(400).json({ success: false, message: 'Business name is required' });
            return;
        }

        // Validate GSTIN if provided
        if (gstin && !validateGSTIN(gstin)) {
            res.status(400).json({ success: false, message: 'Invalid GSTIN format' });
            return;
        }

        // Check if GSTIN is already used by another business (excluding current user's business)
        if (gstin) {
            const existingBusiness = await prisma.business.findUnique({
                where: { gstin },
            });

            if (existingBusiness && existingBusiness.userId !== userId) {
                res.status(400).json({ success: false, message: 'GSTIN already registered with another account' });
                return;
            }
        }

        const business = await prisma.business.upsert({
            where: { userId },
            update: {
                name,
                legalName,
                gstin,
                pan,
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                email,
                phone,
                website,
                logoUrl,
                upiId,
                bankName,
                bankAccountNo,
                bankIfsc,
                termsAndConditions,
                invoicePrefix,
            },
            create: {
                userId,
                name,
                legalName,
                gstin,
                pan,
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                email,
                phone,
                website,
                logoUrl,
                upiId,
                bankName,
                bankAccountNo,
                bankIfsc,
                termsAndConditions,
                invoicePrefix,
            },
        });

        res.status(200).json({
            success: true,
            message: 'Business profile updated successfully',
            data: business,
        });
    } catch (error) {
        console.error('Upsert business error:', error);
        res.status(500).json({ success: false, message: 'Failed to update business profile' });
    }
};

export const getBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }

        const business = await prisma.business.findUnique({
            where: { userId },
        });

        if (!business) {
            res.status(404).json({ success: false, message: 'Business profile not found' });
            return;
        }

        res.status(200).json({
            success: true,
            data: business,
        });
    } catch (error) {
        console.error('Get business error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch business profile' });
    }
};

// Placeholder for Logo Upload
export const uploadLogo = async (req: Request, res: Response): Promise<void> => {
    try {
        // TODO: Implement actual file upload to Cloudinary/S3
        // For now, avoiding new dependencies like multer. 
        // Client should upload to pre-signed URL or we implement this later.

        res.status(501).json({
            success: false,
            message: 'Logo upload endpoint not yet implemented. Send URL in upsertBusiness instead.'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
};
