const MODEL_CONFIG = {
    SCALE: 10,
    DEFAULT_PATH: '/models/hospital_building.glb'
} as const;

export interface Building {
    id: string;
    name: string;
    coordinates: [number, number, number];
    modelPath: string;
    scale?: number;
    address: string;
    phone?: string;
    status: 'available' | 'full';
    patients: number;
    city: string;
}

// Hà Nội hospitals (20 bệnh viện)
const HanoiHospitals: Building[] = [
    {
        id: 'hospital-bach-mai',
        name: 'Bệnh viện Bạch Mai',
        coordinates: [105.8419, 21.0022, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '78 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
        phone: '1900 888 926',
        status: 'available',
        patients: 1250,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-viet-duc',
        name: 'Bệnh viện Việt Đức',
        coordinates: [105.8486, 21.0196, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '40 Tràng Thi, Hàng Bông, Hoàn Kiếm, Hà Nội',
        phone: '024 3825 3531',
        status: 'full',
        patients: 1500,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-108',
        name: 'Bệnh viện Trung ương Quân đội 108',
        coordinates: [105.8502, 21.0183, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '1 Trần Hưng Đạo, Bạch Đằng, Hai Bà Trưng, Hà Nội',
        phone: '024 6278 4009',
        status: 'available',
        patients: 980,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-e',
        name: 'Bệnh viện E Hà Nội',
        coordinates: [105.7969, 21.0289, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '89 Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội',
        phone: '024 3574 1111',
        status: 'available',
        patients: 750,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-thanh-nhan',
        name: 'Bệnh viện Thanh Nhàn',
        coordinates: [105.8562, 21.0075, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '42 Thanh Nhàn, Hai Bà Trưng, Hà Nội',
        phone: '024 3869 2131',
        status: 'full',
        patients: 1100,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-saint-paul',
        name: 'Bệnh viện Saint Paul',
        coordinates: [105.8474, 21.0219, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '12 Chu Văn An, Điện Biên, Ba Đình, Hà Nội',
        phone: '024 3823 4937',
        status: 'available',
        patients: 620,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-vinmec',
        name: 'Bệnh viện Vinmec Times City',
        coordinates: [105.8686, 20.9947, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '458 Minh Khai, Hai Bà Trưng, Hà Nội',
        phone: '024 3974 3556',
        status: 'available',
        patients: 800,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-hong-ngoc',
        name: 'Bệnh viện Hồng Ngọc',
        coordinates: [105.7927, 21.0350, 0],
        modelPath: MODEL_CONFIG.DEFAULT_PATH,
        scale: MODEL_CONFIG.SCALE,
        address: '55 Yên Ninh, Trúc Bạch, Ba Đình, Hà Nội',
        phone: '024 3927 5568',
        status: 'full',
        patients: 450,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-103',
        name: 'Bệnh viện Quân y 103',
        coordinates: [105.7836, 21.0472, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '261 Phùng Hưng, Hoàn Kiếm, Hà Nội',
        phone: '024 3829 3031',
        status: 'available',
        patients: 890,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-k',
        name: 'Bệnh viện K Tân Triều',
        coordinates: [105.7978, 20.9647, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '30 Cầu Bươu, Tân Triều, Thanh Trì, Hà Nội',
        phone: '024 3861 5320',
        status: 'full',
        patients: 1300,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-ung-buou-hanoi',
        name: 'Bệnh viện Ung Bướu Hà Nội',
        coordinates: [105.7912, 21.0234, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '30 Cầu Bươu, Tân Triều, Thanh Trì, Hà Nội',
        phone: '024 3861 5320',
        status: 'available',
        patients: 750,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-phu-nu-hanoi',
        name: 'Bệnh viện Phụ nữ Hà Nội',
        coordinates: [105.8123, 21.0345, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '929 Đường La Thành, Ba Đình, Hà Nội',
        phone: '024 3834 3181',
        status: 'available',
        patients: 620,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-tam-than-hanoi',
        name: 'Bệnh viện Tâm thần Hà Nội',
        coordinates: [105.8234, 21.0456, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '193 Nguyễn Lương Bằng, Đống Đa, Hà Nội',
        phone: '024 3852 2141',
        status: 'full',
        patients: 450,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-da-khoa-hanoi',
        name: 'Bệnh viện Đa khoa Hà Nội',
        coordinates: [105.8345, 21.0567, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '29 Hàng Bông, Hoàn Kiếm, Hà Nội',
        phone: '024 3825 3531',
        status: 'available',
        patients: 850,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-nhi-hanoi',
        name: 'Bệnh viện Nhi Trung ương',
        coordinates: [105.8456, 21.0678, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '18/879 La Thành, Đống Đa, Hà Nội',
        phone: '024 6273 8532',
        status: 'full',
        patients: 1200,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-mat-hanoi',
        name: 'Bệnh viện Mắt Trung ương',
        coordinates: [105.8567, 21.0789, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '85 Bà Triệu, Hai Bà Trưng, Hà Nội',
        phone: '024 3943 3571',
        status: 'available',
        patients: 680,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-rang-ham-mat-hanoi',
        name: 'Bệnh viện Răng Hàm Mặt Trung ương',
        coordinates: [105.8678, 21.0890, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '40B Tràng Thi, Hoàn Kiếm, Hà Nội',
        phone: '024 3826 3852',
        status: 'available',
        patients: 550,
        city: 'Hà Nội'
    },
    {
        id: 'hospital-y-hoc-co-truyen',
        name: 'Bệnh viện Y học cổ truyền Trung ương',
        coordinates: [105.8789, 21.0901, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '29 Nguyễn Bỉnh Khiêm, Hai Bà Trưng, Hà Nội',
        phone: '024 3826 3852',
        status: 'available',
        patients: 420,
        city: 'Hà Nội'
    }
];

// Đà Nẵng hospitals (20 bệnh viện)
const DanangHospitals: Building[] = [
    {
        id: 'hospital-danang',
        name: 'Bệnh viện Đà Nẵng',
        coordinates: [108.2208, 16.0545, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '124 Hải Phòng, Thạch Thang, Hải Châu, Đà Nẵng',
        phone: '0236 3821 118',
        status: 'available',
        patients: 890,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-ung-buou-danang',
        name: 'Bệnh viện Ung Bướu Đà Nẵng',
        coordinates: [108.2187, 16.0479, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '42 Nguyễn Thị Nghĩa, Hải Châu, Đà Nẵng',
        phone: '0236 3847 520',
        status: 'full',
        patients: 670,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-phuc-hoi-danang',
        name: 'Bệnh viện Phục hồi chức năng Đà Nẵng',
        coordinates: [108.2234, 16.0512, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '103 Hùng Vương, Hải Châu, Đà Nẵng',
        phone: '0236 3821 321',
        status: 'available',
        patients: 450,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-phu-nu-danang',
        name: 'Bệnh viện Phụ nữ Đà Nẵng',
        coordinates: [108.2156, 16.0534, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '402 Lê Văn Hiến, Sơn Trà, Đà Nẵng',
        phone: '0236 3929 444',
        status: 'available',
        patients: 520,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-tam-than-danang',
        name: 'Bệnh viện Tâm thần Đà Nẵng',
        coordinates: [108.2198, 16.0467, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '193 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng',
        phone: '0236 3842 326',
        status: 'full',
        patients: 380,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-danang',
        name: 'Bệnh viện Đa khoa Đà Nẵng',
        coordinates: [108.2245, 16.0556, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '124 Hải Phòng, Thạch Thang, Hải Châu, Đà Nẵng',
        phone: '0236 3821 118',
        status: 'available',
        patients: 890,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-nhi-danang',
        name: 'Bệnh viện Nhi Đà Nẵng',
        coordinates: [108.2256, 16.0567, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '42 Nguyễn Thị Nghĩa, Hải Châu, Đà Nẵng',
        phone: '0236 3847 520',
        status: 'full',
        patients: 670,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-mat-danang',
        name: 'Bệnh viện Mắt Đà Nẵng',
        coordinates: [108.2267, 16.0578, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '103 Hùng Vương, Hải Châu, Đà Nẵng',
        phone: '0236 3821 321',
        status: 'available',
        patients: 450,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-rang-ham-mat-danang',
        name: 'Bệnh viện Răng Hàm Mặt Đà Nẵng',
        coordinates: [108.2278, 16.0589, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '402 Lê Văn Hiến, Sơn Trà, Đà Nẵng',
        phone: '0236 3929 444',
        status: 'available',
        patients: 520,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-y-hoc-co-truyen-danang',
        name: 'Bệnh viện Y học cổ truyền Đà Nẵng',
        coordinates: [108.2289, 16.0590, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '193 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng',
        phone: '0236 3842 326',
        status: 'full',
        patients: 380,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-hoa-vang',
        name: 'Bệnh viện Đa khoa Hòa Vang',
        coordinates: [108.2290, 16.0601, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '124 Hải Phòng, Thạch Thang, Hải Châu, Đà Nẵng',
        phone: '0236 3821 118',
        status: 'available',
        patients: 890,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-lien-chieu',
        name: 'Bệnh viện Đa khoa Liên Chiểu',
        coordinates: [108.2301, 16.0612, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '42 Nguyễn Thị Nghĩa, Hải Châu, Đà Nẵng',
        phone: '0236 3847 520',
        status: 'full',
        patients: 670,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-thanh-khe',
        name: 'Bệnh viện Đa khoa Thanh Khê',
        coordinates: [108.2312, 16.0623, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '103 Hùng Vương, Hải Châu, Đà Nẵng',
        phone: '0236 3821 321',
        status: 'available',
        patients: 450,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-son-tra',
        name: 'Bệnh viện Đa khoa Sơn Trà',
        coordinates: [108.2323, 16.0634, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '402 Lê Văn Hiến, Sơn Trà, Đà Nẵng',
        phone: '0236 3929 444',
        status: 'available',
        patients: 520,
        city: 'Đà Nẵng'
    },
    {
        id: 'hospital-da-khoa-cam-le',
        name: 'Bệnh viện Đa khoa Cẩm Lệ',
        coordinates: [108.2334, 16.0645, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '193 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng',
        phone: '0236 3842 326',
        status: 'full',
        patients: 380,
        city: 'Đà Nẵng'
    }
];

// Hồ Chí Minh hospitals (20 bệnh viện)
const HCMHospitals: Building[] = [
    {
        id: 'hospital-cho-ray',
        name: 'Bệnh viện Chợ Rẫy',
        coordinates: [106.6706, 10.7579, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM',
        phone: '028 3855 4137',
        status: 'available',
        patients: 1600,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-115',
        name: 'Bệnh viện Nhân dân 115',
        coordinates: [106.6841, 10.7689, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '527 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM',
        phone: '028 3865 2368',
        status: 'full',
        patients: 1200,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-thong-nhat',
        name: 'Bệnh viện Thống Nhất',
        coordinates: [106.6645, 10.7892, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '1 Lý Thường Kiệt, Phường 7, Tân Bình, TP.HCM',
        phone: '028 3864 1111',
        status: 'available',
        patients: 950,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-tu-du',
        name: 'Bệnh viện Từ Dũ',
        coordinates: [106.6883, 10.7531, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, TP.HCM',
        phone: '028 5404 2829',
        status: 'full',
        patients: 1100,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-binh-dan',
        name: 'Bệnh viện Bình Dân',
        coordinates: [106.6932, 10.7602, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '371 Điện Biên Phủ, Phường 4, Quận 3, TP.HCM',
        phone: '028 3839 7225',
        status: 'available',
        patients: 850,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-nhi-dong-1',
        name: 'Bệnh viện Nhi đồng 1',
        coordinates: [106.6943, 10.7613, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '341 Sư Vạn Hạnh, Phường 10, Quận 10, TP.HCM',
        phone: '028 3927 1119',
        status: 'full',
        patients: 950,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-nhi-dong-2',
        name: 'Bệnh viện Nhi đồng 2',
        coordinates: [106.6954, 10.7624, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '14 Lý Tự Trọng, Bến Nghé, Quận 1, TP.HCM',
        phone: '028 3829 5724',
        status: 'available',
        patients: 880,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-nhi-dong-thành-pho',
        name: 'Bệnh viện Nhi đồng Thành phố',
        coordinates: [106.6965, 10.7635, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '31 Lý Tự Trọng, Bến Nghé, Quận 1, TP.HCM',
        phone: '028 3829 5724',
        status: 'full',
        patients: 920,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-thu-duc',
        name: 'Bệnh viện Đa khoa Thủ Đức',
        coordinates: [106.6976, 10.7646, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '29 Phú Châu, Tam Bình, Thủ Đức, TP.HCM',
        phone: '028 3896 4252',
        status: 'available',
        patients: 750,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-9',
        name: 'Bệnh viện Đa khoa Quận 9',
        coordinates: [106.6987, 10.7657, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '769 Võ Văn Hát, Long Thạnh Mỹ, Quận 9, TP.HCM',
        phone: '028 3730 9848',
        status: 'available',
        patients: 680,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-12',
        name: 'Bệnh viện Đa khoa Quận 12',
        coordinates: [106.6998, 10.7668, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '179 Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, TP.HCM',
        phone: '028 3891 1111',
        status: 'full',
        patients: 820,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-7',
        name: 'Bệnh viện Đa khoa Quận 7',
        coordinates: [106.7009, 10.7679, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '101 Nguyễn Văn Linh, Nam Dương, Hải Châu, TP.HCM',
        phone: '028 3776 1111',
        status: 'available',
        patients: 650,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-8',
        name: 'Bệnh viện Đa khoa Quận 8',
        coordinates: [106.7010, 10.7680, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '126 Hồng Bàng, Phường 12, Quận 5, TP.HCM',
        phone: '028 3855 4137',
        status: 'full',
        patients: 780,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-6',
        name: 'Bệnh viện Đa khoa Quận 6',
        coordinates: [106.7021, 10.7691, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '341 Sư Vạn Hạnh, Phường 10, Quận 10, TP.HCM',
        phone: '028 3927 1119',
        status: 'available',
        patients: 720,
        city: 'Hồ Chí Minh'
    },
    {
        id: 'hospital-da-khoa-quan-4',
        name: 'Bệnh viện Đa khoa Quận 4',
        coordinates: [106.7032, 10.7702, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '14 Lý Tự Trọng, Bến Nghé, Quận 1, TP.HCM',
        phone: '028 3829 5724',
        status: 'full',
        patients: 850,
        city: 'Hồ Chí Minh'
    }
];

// Hải Phòng hospitals (5 bệnh viện)
const HaiPhongHospitals: Building[] = [
    {
        id: 'hospital-viet-tiep',
        name: 'Bệnh viện Việt Tiệp',
        coordinates: [106.6882, 20.8449, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '1 Nhà Thương, Cầu Đất, Lê Chân, Hải Phòng',
        phone: '0225 3851 295',
        status: 'available',
        patients: 850,
        city: 'Hải Phòng'
    },
    {
        id: 'hospital-da-khoa-hai-phong',
        name: 'Bệnh viện Đa khoa Hải Phòng',
        coordinates: [106.6973, 20.8560, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '14 Nguyễn Đức Cảnh, Lê Đại Hành, Lê Chân, Hải Phòng',
        phone: '0225 3747 888',
        status: 'full',
        patients: 720,
        city: 'Hải Phòng'
    },
    {
        id: 'hospital-nhi-hai-phong',
        name: 'Bệnh viện Nhi Hải Phòng',
        coordinates: [106.7064, 20.8671, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '55 Nguyễn Văn Linh, Lê Chân, Hải Phòng',
        phone: '0225 3747 888',
        status: 'available',
        patients: 580,
        city: 'Hải Phòng'
    },
    {
        id: 'hospital-y-hoc-co-truyen-hai-phong',
        name: 'Bệnh viện Y học cổ truyền Hải Phòng',
        coordinates: [106.7155, 20.8782, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '102 Cầu Niệm, Lê Chân, Hải Phòng',
        phone: '0225 3747 888',
        status: 'available',
        patients: 420,
        city: 'Hải Phòng'
    },
    {
        id: 'hospital-da-khoa-kien-an',
        name: 'Bệnh viện Đa khoa Kiến An',
        coordinates: [106.7246, 20.8893, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '102 Cầu Niệm, Lê Chân, Hải Phòng',
        phone: '0225 3747 888',
        status: 'full',
        patients: 650,
        city: 'Hải Phòng'
    }
];

// Cần Thơ hospitals (5 bệnh viện)
const CanThoHospitals: Building[] = [
    {
        id: 'hospital-truong-giang',
        name: 'Bệnh viện Trường Giang',
        coordinates: [105.7478, 10.0341, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '571 Nguyễn Trãi, An Khánh, Ninh Kiều, Cần Thơ',
        phone: '0292 3737 373',
        status: 'available',
        patients: 780,
        city: 'Cần Thơ'
    },
    {
        id: 'hospital-da-khoa-can-tho',
        name: 'Bệnh viện Đa khoa Cần Thơ',
        coordinates: [105.7569, 10.0452, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '179 Nguyễn Văn Cừ, An Nghiệp, Ninh Kiều, Cần Thơ',
        phone: '0292 3737 373',
        status: 'full',
        patients: 920,
        city: 'Cần Thơ'
    },
    {
        id: 'hospital-nhi-can-tho',
        name: 'Bệnh viện Nhi Cần Thơ',
        coordinates: [105.7660, 10.0563, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '345 Nguyễn Văn Linh, An Khánh, Ninh Kiều, Cần Thơ',
        phone: '0292 3737 373',
        status: 'available',
        patients: 650,
        city: 'Cần Thơ'
    },
    {
        id: 'hospital-y-hoc-co-truyen-can-tho',
        name: 'Bệnh viện Y học cổ truyền Cần Thơ',
        coordinates: [105.7751, 10.0674, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '123 Nguyễn Văn Cừ, An Nghiệp, Ninh Kiều, Cần Thơ',
        phone: '0292 3737 373',
        status: 'available',
        patients: 480,
        city: 'Cần Thơ'
    },
    {
        id: 'hospital-da-khoa-o-mon',
        name: 'Bệnh viện Đa khoa Ô Môn',
        coordinates: [105.7842, 10.0785, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '456 Nguyễn Văn Linh, An Khánh, Ninh Kiều, Cần Thơ',
        phone: '0292 3737 373',
        status: 'full',
        patients: 720,
        city: 'Cần Thơ'
    }
];

// Nha Trang hospitals (5 bệnh viện)
const NhaTrangHospitals: Building[] = [
    {
        id: 'hospital-khanh-hoa',
        name: 'Bệnh viện Đa khoa tỉnh Khánh Hòa',
        coordinates: [109.1959, 12.2388, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Yersin, Lộc Thọ, Nha Trang, Khánh Hòa',
        phone: '0258 3821 295',
        status: 'available',
        patients: 850,
        city: 'Nha Trang'
    },
    {
        id: 'hospital-nhi-khanh-hoa',
        name: 'Bệnh viện Nhi Khánh Hòa',
        coordinates: [109.2050, 12.2499, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Yersin, Lộc Thọ, Nha Trang, Khánh Hòa',
        phone: '0258 3821 295',
        status: 'full',
        patients: 680,
        city: 'Nha Trang'
    },
    {
        id: 'hospital-y-hoc-co-truyen-khanh-hoa',
        name: 'Bệnh viện Y học cổ truyền Khánh Hòa',
        coordinates: [109.2141, 12.2610, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Yersin, Lộc Thọ, Nha Trang, Khánh Hòa',
        phone: '0258 3821 295',
        status: 'available',
        patients: 520,
        city: 'Nha Trang'
    },
    {
        id: 'hospital-da-khoa-nha-trang',
        name: 'Bệnh viện Đa khoa Nha Trang',
        coordinates: [109.2232, 12.2721, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Yersin, Lộc Thọ, Nha Trang, Khánh Hòa',
        phone: '0258 3821 295',
        status: 'available',
        patients: 750,
        city: 'Nha Trang'
    },
    {
        id: 'hospital-da-khoa-cam-ranh',
        name: 'Bệnh viện Đa khoa Cam Ranh',
        coordinates: [109.2323, 12.2832, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Yersin, Lộc Thọ, Nha Trang, Khánh Hòa',
        phone: '0258 3821 295',
        status: 'full',
        patients: 620,
        city: 'Nha Trang'
    }
];

// Huế hospitals (5 bệnh viện)
const HueHospitals: Building[] = [
    {
        id: 'hospital-trung-uong-hue',
        name: 'Bệnh viện Trung ương Huế',
        coordinates: [107.5898, 16.4637, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '16 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế',
        phone: '0234 3822 325',
        status: 'available',
        patients: 950,
        city: 'Huế'
    },
    {
        id: 'hospital-da-khoa-hue',
        name: 'Bệnh viện Đa khoa Thành phố Huế',
        coordinates: [107.5989, 16.4748, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '16 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế',
        phone: '0234 3822 325',
        status: 'full',
        patients: 780,
        city: 'Huế'
    },
    {
        id: 'hospital-nhi-hue',
        name: 'Bệnh viện Nhi Thừa Thiên Huế',
        coordinates: [107.6080, 16.4859, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '16 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế',
        phone: '0234 3822 325',
        status: 'available',
        patients: 650,
        city: 'Huế'
    },
    {
        id: 'hospital-y-hoc-co-truyen-hue',
        name: 'Bệnh viện Y học cổ truyền Thừa Thiên Huế',
        coordinates: [107.6171, 16.4970, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '16 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế',
        phone: '0234 3822 325',
        status: 'available',
        patients: 480,
        city: 'Huế'
    },
    {
        id: 'hospital-da-khoa-a-luoi',
        name: 'Bệnh viện Đa khoa A Lưới',
        coordinates: [107.6262, 16.5081, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '16 Lê Lợi, Vĩnh Ninh, Thành phố Huế, Thừa Thiên Huế',
        phone: '0234 3822 325',
        status: 'full',
        patients: 620,
        city: 'Huế'
    }
];

// Biên Hòa hospitals (5 bệnh viện)
const BienHoaHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-bien-hoa',
        name: 'Bệnh viện Đa khoa Biên Hòa',
        coordinates: [106.8249, 10.9559, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Văn Đồng, Tân Hiệp, Biên Hòa, Đồng Nai',
        phone: '0251 3822 295',
        status: 'available',
        patients: 850,
        city: 'Biên Hòa'
    },
    {
        id: 'hospital-nhi-bien-hoa',
        name: 'Bệnh viện Nhi Biên Hòa',
        coordinates: [106.8340, 10.9670, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Văn Đồng, Tân Hiệp, Biên Hòa, Đồng Nai',
        phone: '0251 3822 295',
        status: 'full',
        patients: 680,
        city: 'Biên Hòa'
    },
    {
        id: 'hospital-y-hoc-co-truyen-bien-hoa',
        name: 'Bệnh viện Y học cổ truyền Biên Hòa',
        coordinates: [106.8431, 10.9781, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Văn Đồng, Tân Hiệp, Biên Hòa, Đồng Nai',
        phone: '0251 3822 295',
        status: 'available',
        patients: 520,
        city: 'Biên Hòa'
    },
    {
        id: 'hospital-da-khoa-long-khanh',
        name: 'Bệnh viện Đa khoa Long Khánh',
        coordinates: [106.8522, 10.9892, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Văn Đồng, Tân Hiệp, Biên Hòa, Đồng Nai',
        phone: '0251 3822 295',
        status: 'available',
        patients: 750,
        city: 'Biên Hòa'
    },
    {
        id: 'hospital-da-khoa-xuan-loc',
        name: 'Bệnh viện Đa khoa Xuân Lộc',
        coordinates: [106.8613, 11.0003, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Văn Đồng, Tân Hiệp, Biên Hòa, Đồng Nai',
        phone: '0251 3822 295',
        status: 'full',
        patients: 620,
        city: 'Biên Hòa'
    }
];

// Vinh hospitals (5 bệnh viện)
const VinhHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-nghe-an',
        name: 'Bệnh viện Đa khoa tỉnh Nghệ An',
        coordinates: [105.6812, 18.6792, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '19 Tôn Thất Tùng, Hưng Dũng, Thành phố Vinh, Nghệ An',
        phone: '0238 3895 295',
        status: 'available',
        patients: 850,
        city: 'Vinh'
    },
    {
        id: 'hospital-nhi-nghe-an',
        name: 'Bệnh viện Nhi Nghệ An',
        coordinates: [105.6903, 18.6903, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '51 Tôn Thất Tùng, Hưng Dũng, Thành phố Vinh, Nghệ An',
        phone: '0238 3895 295',
        status: 'full',
        patients: 680,
        city: 'Vinh'
    },
    {
        id: 'hospital-y-hoc-co-truyen-nghe-an',
        name: 'Bệnh viện Y học cổ truyền Nghệ An',
        coordinates: [105.6994, 18.7014, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '123 Lê Duẩn, Hưng Dũng, Thành phố Vinh, Nghệ An',
        phone: '0238 3895 295',
        status: 'available',
        patients: 520,
        city: 'Vinh'
    },
    {
        id: 'hospital-da-khoa-cua-lo',
        name: 'Bệnh viện Đa khoa Cửa Lò',
        coordinates: [105.7085, 18.7125, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '51 Tôn Thất Tùng, Hưng Dũng, Thành phố Vinh, Nghệ An',
        phone: '0238 3895 295',
        status: 'available',
        patients: 750,
        city: 'Vinh'
    },
    {
        id: 'hospital-da-khoa-hoang-mai',
        name: 'Bệnh viện Đa khoa Hoàng Mai',
        coordinates: [105.7176, 18.7236, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '123 Lê Duẩn, Hưng Dũng, Thành phố Vinh, Nghệ An',
        phone: '0238 3895 295',
        status: 'full',
        patients: 620,
        city: 'Vinh'
    }
];

// Nam Định hospitals (5 bệnh viện)
const NamDinhHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-nam-dinh',
        name: 'Bệnh viện Đa khoa tỉnh Nam Định',
        coordinates: [106.1667, 20.4333, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Ngọc Thạch, Thống Nhất, Thành phố Nam Định, Nam Định',
        phone: '0228 3851 295',
        status: 'available',
        patients: 850,
        city: 'Nam Định'
    },
    {
        id: 'hospital-nhi-nam-dinh',
        name: 'Bệnh viện Nhi Nam Định',
        coordinates: [106.1758, 20.4444, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Ngọc Thạch, Thống Nhất, Thành phố Nam Định, Nam Định',
        phone: '0228 3851 295',
        status: 'full',
        patients: 680,
        city: 'Nam Định'
    },
    {
        id: 'hospital-y-hoc-co-truyen-nam-dinh',
        name: 'Bệnh viện Y học cổ truyền Nam Định',
        coordinates: [106.1849, 20.4555, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Ngọc Thạch, Thống Nhất, Thành phố Nam Định, Nam Định',
        phone: '0228 3851 295',
        status: 'available',
        patients: 520,
        city: 'Nam Định'
    },
    {
        id: 'hospital-da-khoa-nghia-hung',
        name: 'Bệnh viện Đa khoa Nghĩa Hưng',
        coordinates: [106.1940, 20.4666, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Ngọc Thạch, Thống Nhất, Thành phố Nam Định, Nam Định',
        phone: '0228 3851 295',
        status: 'available',
        patients: 750,
        city: 'Nam Định'
    },
    {
        id: 'hospital-da-khoa-xuan-truong',
        name: 'Bệnh viện Đa khoa Xuân Trường',
        coordinates: [106.2031, 20.4777, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '5 Phạm Ngọc Thạch, Thống Nhất, Thành phố Nam Định, Nam Định',
        phone: '0228 3851 295',
        status: 'full',
        patients: 620,
        city: 'Nam Định'
    }
];

// Thanh Hóa hospitals (5 bệnh viện)
const ThanhHoaHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-thanh-hoa',
        name: 'Bệnh viện Đa khoa tỉnh Thanh Hóa',
        coordinates: [105.7852, 19.8067, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '213 Hàm Nghi, Đông Thọ, Thành phố Thanh Hóa, Thanh Hóa',
        phone: '0237 3851 295',
        status: 'available',
        patients: 850,
        city: 'Thanh Hóa'
    },
    {
        id: 'hospital-nhi-thanh-hoa',
        name: 'Bệnh viện Nhi Thanh Hóa',
        coordinates: [105.7943, 19.8178, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '213 Hàm Nghi, Đông Thọ, Thành phố Thanh Hóa, Thanh Hóa',
        phone: '0237 3851 295',
        status: 'full',
        patients: 680,
        city: 'Thanh Hóa'
    },
    {
        id: 'hospital-y-hoc-co-truyen-thanh-hoa',
        name: 'Bệnh viện Y học cổ truyền Thanh Hóa',
        coordinates: [105.8034, 19.8289, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '213 Hàm Nghi, Đông Thọ, Thành phố Thanh Hóa, Thanh Hóa',
        phone: '0237 3851 295',
        status: 'available',
        patients: 520,
        city: 'Thanh Hóa'
    },
    {
        id: 'hospital-da-khoa-sam-son',
        name: 'Bệnh viện Đa khoa Sầm Sơn',
        coordinates: [105.8125, 19.8400, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '213 Hàm Nghi, Đông Thọ, Thành phố Thanh Hóa, Thanh Hóa',
        phone: '0237 3851 295',
        status: 'available',
        patients: 750,
        city: 'Thanh Hóa'
    },
    {
        id: 'hospital-da-khoa-bim-son',
        name: 'Bệnh viện Đa khoa Bỉm Sơn',
        coordinates: [105.8216, 19.8511, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '213 Hàm Nghi, Đông Thọ, Thành phố Thanh Hóa, Thanh Hóa',
        phone: '0237 3851 295',
        status: 'full',
        patients: 620,
        city: 'Thanh Hóa'
    }
];

// Quy Nhơn hospitals (5 bệnh viện)
const QuyNhonHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-binh-dinh',
        name: 'Bệnh viện Đa khoa tỉnh Bình Định',
        coordinates: [109.2232, 13.7667, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '106 Nguyễn Huệ, Lê Lợi, Thành phố Quy Nhơn, Bình Định',
        phone: '0256 3821 295',
        status: 'available',
        patients: 850,
        city: 'Quy Nhơn'
    },
    {
        id: 'hospital-nhi-binh-dinh',
        name: 'Bệnh viện Nhi Bình Định',
        coordinates: [109.2323, 13.7778, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '106 Nguyễn Huệ, Lê Lợi, Thành phố Quy Nhơn, Bình Định',
        phone: '0256 3821 295',
        status: 'full',
        patients: 680,
        city: 'Quy Nhơn'
    },
    {
        id: 'hospital-y-hoc-co-truyen-binh-dinh',
        name: 'Bệnh viện Y học cổ truyền Bình Định',
        coordinates: [109.2414, 13.7889, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '106 Nguyễn Huệ, Lê Lợi, Thành phố Quy Nhơn, Bình Định',
        phone: '0256 3821 295',
        status: 'available',
        patients: 520,
        city: 'Quy Nhơn'
    },
    {
        id: 'hospital-da-khoa-an-nhon',
        name: 'Bệnh viện Đa khoa An Nhơn',
        coordinates: [109.2505, 13.8000, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '106 Nguyễn Huệ, Lê Lợi, Thành phố Quy Nhơn, Bình Định',
        phone: '0256 3821 295',
        status: 'available',
        patients: 750,
        city: 'Quy Nhơn'
    },
    {
        id: 'hospital-da-khoa-tuy-phuoc',
        name: 'Bệnh viện Đa khoa Tuy Phước',
        coordinates: [109.2596, 13.8111, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '106 Nguyễn Huệ, Lê Lợi, Thành phố Quy Nhơn, Bình Định',
        phone: '0256 3821 295',
        status: 'full',
        patients: 620,
        city: 'Quy Nhơn'
    }
];

// Thái Nguyên hospitals (5 bệnh viện)
const ThaiNguyenHospitals: Building[] = [
    {
        id: 'hospital-da-khoa-thai-nguyen',
        name: 'Bệnh viện Đa khoa tỉnh Thái Nguyên',
        coordinates: [105.8250, 21.5942, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '479 Lương Ngọc Quyến, Tân Thịnh, Thành phố Thái Nguyên, Thái Nguyên',
        phone: '0208 3851 295',
        status: 'available',
        patients: 850,
        city: 'Thái Nguyên'
    },
    {
        id: 'hospital-nhi-thai-nguyen',
        name: 'Bệnh viện Nhi Thái Nguyên',
        coordinates: [105.8341, 21.6053, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '479 Lương Ngọc Quyến, Tân Thịnh, Thành phố Thái Nguyên, Thái Nguyên',
        phone: '0208 3851 295',
        status: 'full',
        patients: 680,
        city: 'Thái Nguyên'
    },
    {
        id: 'hospital-y-hoc-co-truyen-thai-nguyen',
        name: 'Bệnh viện Y học cổ truyền Thái Nguyên',
        coordinates: [105.8432, 21.6164, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '479 Lương Ngọc Quyến, Tân Thịnh, Thành phố Thái Nguyên, Thái Nguyên',
        phone: '0208 3851 295',
        status: 'available',
        patients: 520,
        city: 'Thái Nguyên'
    },
    {
        id: 'hospital-da-khoa-song-cong',
        name: 'Bệnh viện Đa khoa Sông Công',
        coordinates: [105.8523, 21.6275, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '479 Lương Ngọc Quyến, Tân Thịnh, Thành phố Thái Nguyên, Thái Nguyên',
        phone: '0208 3851 295',
        status: 'available',
        patients: 750,
        city: 'Thái Nguyên'
    },
    {
        id: 'hospital-da-khoa-pho-yen',
        name: 'Bệnh viện Đa khoa Phổ Yên',
        coordinates: [105.8614, 21.6386, 0],
        modelPath: '/models/hospital_building.glb',
        scale: 2,
        address: '479 Lương Ngọc Quyến, Tân Thịnh, Thành phố Thái Nguyên, Thái Nguyên',
        phone: '0208 3851 295',
        status: 'full',
        patients: 620,
        city: 'Thái Nguyên'
    }
];

// Combine all hospitals
export const BUILDINGS: Building[] = [
    ...HanoiHospitals,
    ...DanangHospitals,
    ...HCMHospitals,
    ...HaiPhongHospitals,
    ...CanThoHospitals,
    ...NhaTrangHospitals,
    ...HueHospitals,
    ...BienHoaHospitals,
    ...VinhHospitals,
    ...NamDinhHospitals,
    ...ThanhHoaHospitals,
    ...QuyNhonHospitals,
    ...ThaiNguyenHospitals
];