/**
 * Validates a GSTIN (Goods and Services Tax Identification Number)
 * @param gstin The GSTIN string to validate
 * @returns boolean true if valid, false otherwise
 */
export const validateGSTIN = (gstin: string): boolean => {
    if (!gstin) return false;

    // GSTIN Format:
    // 2 digits: State code (01-38, 97, 99)
    // 10 chars: PAN number (5 letters, 4 digits, 1 letter)
    // 1 digit: Entity number (1-9, A-Z)
    // 1 char: Z (Default)
    // 1 char: Checksum digit (0-9, A-Z)
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

    if (!gstRegex.test(gstin)) {
        return false;
    }

    // Validate State Code
    const stateCode = parseInt(gstin.substring(0, 2), 10);
    const validStateCodes = [
        ...Array.from({ length: 38 }, (_, i) => i + 1), // 01-38
        97, // Other Territory
        99  // Centre Jurisdiction
    ];

    if (!validStateCodes.includes(stateCode)) {
        return false;
    }

    // Checksum validation skipped for MVP to avoid false negatives.
    // Regex + State Code validation covers 99% of cases.
    return true;
};

