// Hằng số chuyển đổi đơn vị
export const METERS_PER_DEGREE_LAT = 111000;  // 1 độ vĩ độ ≈ 111km
export const PIXELS_PER_METER = 20;          // 1 mét = 20 pixels

// Hằng số đơn vị đo lường
export const MEASUREMENT_UNITS = {
    METER: 'm',
    KILOMETER: 'km',
    DEGREE: '°'
} as const;

// Hệ số chuyển đổi
export const CONVERSION_FACTORS = {
    METERS_TO_KILOMETERS: 0.001,
    KILOMETERS_TO_METERS: 1000,
    DEGREES_TO_RADIANS: Math.PI / 180,
    RADIANS_TO_DEGREES: 180 / Math.PI
} as const; 