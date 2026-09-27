// ===== DATA: Personality Types (16 MBTI-inspired) =====
const PERSONALITY_TYPES = [
  {
    id: "INTJ",
    name: "Nhà Chiến Lược",
    slogan: "Tầm nhìn xa – Kế hoạch rõ",
    summary: "Người có tư duy chiến lược, luôn nhìn xa và xây dựng kế hoạch dài hạn.",
    description: "INTJ là những người độc lập, phân tích sâu và luôn tìm cách tối ưu hóa hệ thống. Họ thích làm việc với ý tưởng phức tạp và có khả năng tập trung cao độ vào mục tiêu dài hạn.",
    category: "analyst",
    color: "#6366f1",
    strengths: ["Tư duy chiến lược", "Độc lập", "Quyết đoán", "Tầm nhìn dài hạn"],
    weaknesses: ["Có thể quá cầu toàn", "Ít quan tâm cảm xúc người khác", "Khó chấp nhận ý kiến trái chiều"],
    thinking: "Phân tích logic, hệ thống hóa thông tin, ưu tiên hiệu quả.",
    interaction: "Ít nói nhưng sâu sắc, thích thảo luận ý tưởng hơn chuyện phiếm.",
    decision: "Dựa trên logic và dữ liệu, ít bị ảnh hưởng bởi cảm xúc.",
    learning: "Học qua nghiên cứu độc lập, mô hình lý thuyết và thử nghiệm.",
    careers: ["Chiến lược gia", "Nhà khoa học dữ liệu", "Kiến trúc sư phần mềm", "Nhà nghiên cứu", "Quản lý dự án"],
    image: "strategy"
  },
  {
    id: "INTP",
    name: "Nhà Tư Duy",
    slogan: "Tò mò – Phân tích – Đổi mới",
    summary: "Người yêu thích khám phá ý tưởng và tìm hiểu cách mọi thứ vận hành.",
    description: "INTP là những nhà tư duy sáng tạo, luôn đặt câu hỏi và tìm kiếm sự thật. Họ thích lý thuyết, mô hình và giải quyết vấn đề phức tạp theo cách độc đáo.",
    category: "analyst",
    color: "#8b5cf6",
    strengths: ["Sáng tạo ý tưởng", "Phân tích sâu", "Linh hoạt tư duy", "Tò mò tri thức"],
    weaknesses: ["Dễ mất tập trung", "Khó hoàn thành công việc thực tế", "Ít quan tâm chi tiết xã hội"],
    thinking: "Logic trừu tượng, thích mô hình hóa và lý thuyết hóa.",
    interaction: "Thân thiện nhưng thích không gian riêng, giao tiếp qua ý tưởng.",
    decision: "Dựa trên logic và khả năng mở rộng ý tưởng.",
    learning: "Học qua tự nghiên cứu, thảo luận và thử nghiệm ý tưởng mới.",
    careers: ["Nhà nghiên cứu", "Lập trình viên", "Nhà triết học", "Phân tích hệ thống", "Nhà khoa học"],
    image: "thinker"
  },
  {
    id: "ENTJ",
    name: "Người Lãnh Đạo",
    slogan: "Quyết đoán – Định hướng – Hiệu quả",
    summary: "Người có khả năng lãnh đạo tự nhiên, luôn hướng tới mục tiêu và tổ chức tốt.",
    description: "ENTJ là những nhà lãnh đạo bẩm sinh, có tầm nhìn và khả năng thúc đẩy đội nhóm đạt kết quả. Họ quyết đoán, năng động và luôn tìm cách cải thiện hệ thống.",
    category: "analyst",
    color: "#ef4444",
    strengths: ["Lãnh đạo mạnh mẽ", "Tổ chức xuất sắc", "Quyết đoán", "Tầm nhìn chiến lược"],
    weaknesses: ["Có thể quá áp đặt", "Ít kiên nhẫn với sự chậm chạp", "Bỏ qua cảm xúc"],
    thinking: "Chiến lược, tập trung vào kết quả và hiệu quả.",
    interaction: "Trực tiếp, rõ ràng, thích dẫn dắt cuộc trò chuyện.",
    decision: "Nhanh chóng dựa trên mục tiêu và logic.",
    learning: "Học qua thực hành lãnh đạo và giải quyết vấn đề thực tế.",
    careers: ["CEO", "Quản lý cấp cao", "Luật sư", "Tư vấn chiến lược", "Doanh nhân"],
    image: "leader"
  },
  {
    id: "ENTP",
    name: "Người Tranh Biện",
    slogan: "Sáng tạo – Nhanh trí – Đổi mới",
    summary: "Người năng động, thích thách thức ý tưởng và tạo ra giải pháp mới.",
    description: "ENTP là những người nhanh trí, thích tranh luận và khám phá khả năng. Họ sáng tạo, linh hoạt và luôn tìm cách cải tiến mọi thứ.",
    category: "analyst",
    color: "#f59e0b",
    strengths: ["Sáng tạo", "Nhanh nhạy", "Thuyết phục", "Linh hoạt"],
    weaknesses: ["Dễ chán", "Khó tập trung dài hạn", "Có thể gây tranh cãi"],
    thinking: "Nhanh, liên kết ý tưởng, thích thách thức hiện trạng.",
    interaction: "Năng động, hài hước, thích thảo luận sôi nổi.",
    decision: "Dựa trên khả năng và cơ hội mới.",
    learning: "Học qua tranh luận, thử nghiệm và dự án thực tế.",
    careers: ["Doanh nhân", "Marketing", "Tư vấn", "Nhà báo", "Product Manager"],
    image: "debater"
  },
  {
    id: "INFJ",
    name: "Người Cố Vấn",
    slogan: "Sâu sắc – Đồng cảm – Định hướng",
    summary: "Người có trực giác mạnh, luôn muốn giúp người khác phát triển.",
    description: "INFJ là những người sâu sắc, có khả năng hiểu cảm xúc và động lực của người khác. Họ sống theo giá trị và thường là nguồn cảm hứng cho mọi người xung quanh.",
    category: "diplomat",
    color: "#10b981",
    strengths: ["Đồng cảm sâu", "Tầm nhìn dài hạn", "Trung thành", "Sáng tạo"],
    weaknesses: ["Dễ kiệt sức cảm xúc", "Khó nói không", "Cầu toàn"],
    thinking: "Trực giác, kết nối cảm xúc và ý nghĩa sâu xa.",
    interaction: "Ấm áp nhưng chọn lọc, thích mối quan hệ sâu.",
    decision: "Dựa trên giá trị và tác động đến người khác.",
    learning: "Học qua ý nghĩa, câu chuyện và kết nối cá nhân.",
    careers: ["Tư vấn tâm lý", "Nhà văn", "Giáo viên", "HR", "Nhà trị liệu"],
    image: "advisor"
  },
  {
    id: "INFP",
    name: "Người Lý Tưởng",
    slogan: "Chân thành – Sáng tạo – Giá trị",
    summary: "Người sống theo lý tưởng, sáng tạo và luôn trung thành với giá trị bản thân.",
    description: "INFP là những người nhạy cảm, giàu trí tưởng tượng và luôn tìm kiếm ý nghĩa. Họ sáng tạo, trung thực với chính mình và muốn tạo ra tác động tích cực.",
    category: "diplomat",
    color: "#ec4899",
    strengths: ["Sáng tạo", "Đồng cảm", "Trung thực", "Linh hoạt"],
    weaknesses: ["Dễ bị quá tải cảm xúc", "Khó đưa ra quyết định thực tế", "Tránh xung đột"],
    thinking: "Dựa trên giá trị và cảm xúc sâu sắc.",
    interaction: "Ấm áp, lắng nghe tốt, thích không gian riêng.",
    decision: "Theo cảm xúc và giá trị cá nhân.",
    learning: "Học qua cảm hứng, nghệ thuật và trải nghiệm cá nhân.",
    careers: ["Nhà văn", "Thiết kế", "Tâm lý học", "Nghệ sĩ", "Giáo dục"],
    image: "idealist"
  },
  {
    id: "ENFJ",
    name: "Người Thầy",
    slogan: "Truyền cảm hứng – Kết nối – Phát triển",
    summary: "Người có khả năng lãnh đạo bằng sự đồng cảm và truyền cảm hứng mạnh mẽ.",
    description: "ENFJ là những người ấm áp, có khả năng hiểu và thúc đẩy tiềm năng của người khác. Họ là nhà lãnh đạo tự nhiên trong các môi trường xã hội và giáo dục.",
    category: "diplomat",
    color: "#14b8a6",
    strengths: ["Truyền cảm hứng", "Đồng cảm", "Tổ chức tốt", "Giao tiếp xuất sắc"],
    weaknesses: ["Dễ quên nhu cầu bản thân", "Quá lý tưởng hóa", "Nhạy cảm với phê bình"],
    thinking: "Tập trung vào con người và tiềm năng phát triển.",
    interaction: "Ấm áp, tích cực, thích kết nối và hỗ trợ.",
    decision: "Dựa trên tác động đến cộng đồng và giá trị.",
    learning: "Học qua tương tác, mentoring và trải nghiệm nhóm.",
    careers: ["Giáo viên", "Huấn luyện viên", "HR", "Quan hệ công chúng", "Tư vấn"],
    image: "teacher"
  },
  {
    id: "ENFP",
    name: "Người Truyền Cảm Hứng",
    slogan: "Nhiệt huyết – Sáng tạo – Tự do",
    summary: "Người năng động, giàu ý tưởng và luôn truyền năng lượng tích cực.",
    description: "ENFP là những người sáng tạo, nhiệt tình và thích khám phá khả năng mới. Họ kết nối tốt với mọi người và mang lại không khí vui vẻ, đầy cảm hứng.",
    category: "diplomat",
    color: "#f97316",
    strengths: ["Sáng tạo", "Nhiệt huyết", "Giao tiếp tốt", "Linh hoạt"],
    weaknesses: ["Dễ mất tập trung", "Khó hoàn thành chi tiết", "Cảm xúc biến động"],
    thinking: "Liên kết ý tưởng, tập trung vào khả năng và cảm hứng.",
    interaction: "Năng động, thân thiện, thích trò chuyện sâu.",
    decision: "Theo cảm hứng và giá trị cá nhân.",
    learning: "Học qua trải nghiệm, thảo luận và dự án sáng tạo.",
    careers: ["Marketing", "Nội dung sáng tạo", "Tư vấn", "Sự kiện", "Doanh nhân"],
    image: "inspirer"
  },
  {
    id: "ISTJ",
    name: "Người Tổ Chức",
    slogan: "Đáng tin – Kỷ luật – Thực tế",
    summary: "Người trách nhiệm cao, thích trật tự và hoàn thành công việc đúng hạn.",
    description: "ISTJ là những người đáng tin cậy, làm việc có hệ thống và luôn tuân thủ quy trình. Họ là trụ cột của nhiều tổ chức nhờ sự ổn định và trách nhiệm.",
    category: "sentinel",
    color: "#3b82f6",
    strengths: ["Đáng tin cậy", "Tổ chức tốt", "Kiên trì", "Thực tế"],
    weaknesses: ["Khó thích nghi thay đổi", "Cứng nhắc", "Ít thể hiện cảm xúc"],
    thinking: "Logic, dựa trên dữ liệu và kinh nghiệm thực tế.",
    interaction: "Ít nói, trung thực, thích giao tiếp rõ ràng.",
    decision: "Dựa trên quy trình và bằng chứng cụ thể.",
    learning: "Học qua thực hành, quy trình và ví dụ cụ thể.",
    careers: ["Kế toán", "Quản lý hành chính", "Luật", "Kỹ thuật", "Logistics"],
    image: "organizer"
  },
  {
    id: "ISFJ",
    name: "Người Hỗ Trợ",
    slogan: "Tận tâm – Bảo vệ – Chăm sóc",
    summary: "Người ấm áp, sẵn sàng hỗ trợ và bảo vệ những người xung quanh.",
    description: "ISFJ là những người tận tâm, quan tâm đến nhu cầu của người khác và luôn giữ gìn sự ổn định. Họ làm việc thầm lặng nhưng rất hiệu quả.",
    category: "sentinel",
    color: "#06b6d4",
    strengths: ["Tận tâm", "Chi tiết", "Đáng tin", "Đồng cảm"],
    weaknesses: ["Khó từ chối", "Ngại thay đổi", "Ít nói về nhu cầu bản thân"],
    thinking: "Thực tế, tập trung vào nhu cầu thực tế của người khác.",
    interaction: "Ấm áp, lắng nghe tốt, thích hỗ trợ.",
    decision: "Dựa trên trách nhiệm và tác động đến người khác.",
    learning: "Học qua thực hành và hỗ trợ người khác.",
    careers: ["Y tá", "Giáo viên tiểu học", "HR", "Chăm sóc khách hàng", "Hành chính"],
    image: "supporter"
  },
  {
    id: "ESTJ",
    name: "Người Quản Lý",
    slogan: "Tổ chức – Hiệu quả – Trách nhiệm",
    summary: "Người có khả năng tổ chức xuất sắc và luôn hướng tới kết quả rõ ràng.",
    description: "ESTJ là những người thực tế, quyết đoán và giỏi quản lý nguồn lực. Họ tạo ra cấu trúc và đảm bảo mọi thứ vận hành trơn tru.",
    category: "sentinel",
    color: "#0ea5e9",
    strengths: ["Tổ chức mạnh", "Quyết đoán", "Trách nhiệm", "Thực tế"],
    weaknesses: ["Có thể quá cứng nhắc", "Ít linh hoạt", "Bỏ qua cảm xúc"],
    thinking: "Logic thực tế, tập trung vào hiệu quả và quy trình.",
    interaction: "Trực tiếp, rõ ràng, thích dẫn dắt.",
    decision: "Nhanh chóng dựa trên quy tắc và mục tiêu.",
    learning: "Học qua thực hành và quản lý dự án thực tế.",
    careers: ["Quản lý", "Doanh nhân", "Quân sự", "Luật", "Vận hành"],
    image: "manager"
  },
  {
    id: "ESFJ",
    name: "Người Hòa Đồng",
    slogan: "Kết nối – Hỗ trợ – Cộng đồng",
    summary: "Người thân thiện, quan tâm đến hòa hợp và luôn sẵn sàng giúp đỡ.",
    description: "ESFJ là những người ấm áp, thích tạo dựng mối quan hệ và duy trì sự hòa hợp trong nhóm. Họ là chất keo kết nối mọi người.",
    category: "sentinel",
    color: "#a855f7",
    strengths: ["Giao tiếp tốt", "Tận tâm", "Tổ chức sự kiện", "Đồng cảm"],
    weaknesses: ["Nhạy cảm với phê bình", "Khó nói không", "Phụ thuộc vào sự công nhận"],
    thinking: "Tập trung vào con người và sự hòa hợp xã hội.",
    interaction: "Thân thiện, nhiệt tình, thích kết nối.",
    decision: "Dựa trên tác động đến mối quan hệ và cộng đồng.",
    learning: "Học qua tương tác nhóm và hỗ trợ thực tế.",
    careers: ["Sự kiện", "Chăm sóc khách hàng", "Giáo dục", "Y tế", "PR"],
    image: "harmonizer"
  },
  {
    id: "ISTP",
    name: "Người Thực Hành",
    slogan: "Thực tế – Linh hoạt – Giải quyết vấn đề",
    summary: "Người thích hành động, giải quyết vấn đề thực tế bằng tay và trí tuệ.",
    description: "ISTP là những người thực tế, linh hoạt và giỏi xử lý tình huống bất ngờ. Họ thích làm việc với công cụ, máy móc và giải pháp cụ thể.",
    category: "explorer",
    color: "#64748b",
    strengths: ["Giải quyết vấn đề", "Linh hoạt", "Thực tế", "Bình tĩnh"],
    weaknesses: ["Khó thể hiện cảm xúc", "Dễ chán quy trình", "Ít lập kế hoạch dài hạn"],
    thinking: "Thực tế, phân tích nguyên nhân – kết quả ngay lập tức.",
    interaction: "Ít nói, quan sát, thích hành động hơn lời nói.",
    decision: "Dựa trên thực tế và hiệu quả tức thì.",
    learning: "Học qua thực hành, thử nghiệm và sửa chữa.",
    careers: ["Kỹ thuật viên", "Kỹ sư", "Phi công", "Thợ thủ công", "Phân tích kỹ thuật"],
    image: "practitioner"
  },
  {
    id: "ISFP",
    name: "Người Nghệ Sĩ",
    slogan: "Cảm nhận – Sáng tạo – Tự do",
    summary: "Người nhạy cảm với vẻ đẹp, thích thể hiện bản thân qua nghệ thuật và trải nghiệm.",
    description: "ISFP là những người sống trong hiện tại, nhạy cảm với thẩm mỹ và luôn trung thành với giá trị cá nhân. Họ sáng tạo và thích không gian tự do.",
    category: "explorer",
    color: "#d946ef",
    strengths: ["Sáng tạo", "Đồng cảm", "Linh hoạt", "Thẩm mỹ tốt"],
    weaknesses: ["Khó lập kế hoạch dài hạn", "Tránh xung đột", "Dễ bị quá tải"],
    thinking: "Cảm nhận, tập trung vào trải nghiệm và giá trị cá nhân.",
    interaction: "Ấm áp, lắng nghe, thích không gian riêng.",
    decision: "Theo cảm xúc và giá trị hiện tại.",
    learning: "Học qua trải nghiệm thực tế và sáng tạo.",
    careers: ["Thiết kế", "Nghệ thuật", "Nhiếp ảnh", "Thời trang", "Liệu pháp"],
    image: "artist"
  },
  {
    id: "ESTP",
    name: "Người Hành Động",
    slogan: "Năng động – Thực tế – Cơ hội",
    summary: "Người thích hành động nhanh, nắm bắt cơ hội và sống hết mình với hiện tại.",
    description: "ESTP là những người năng động, thực tế và giỏi xử lý tình huống. Họ thích thử thách, rủi ro tính toán và kết quả tức thì.",
    category: "explorer",
    color: "#eab308",
    strengths: ["Hành động nhanh", "Thực tế", "Thuyết phục", "Linh hoạt"],
    weaknesses: ["Khó tập trung dài hạn", "Có thể bốc đồng", "Ít quan tâm lý thuyết"],
    thinking: "Thực tế, tập trung vào cơ hội và kết quả ngay.",
    interaction: "Năng động, hài hước, thích giao tiếp trực tiếp.",
    decision: "Nhanh chóng dựa trên thực tế hiện tại.",
    learning: "Học qua hành động, thử nghiệm và trải nghiệm thực tế.",
    careers: ["Kinh doanh", "Bán hàng", "Thể thao", "Doanh nhân", "Sự kiện"],
    image: "doer"
  },
  {
    id: "ESFP",
    name: "Người Biểu Diễn",
    slogan: "Vui vẻ – Kết nối – Sống động",
    summary: "Người mang lại năng lượng tích cực, thích kết nối và tận hưởng khoảnh khắc.",
    description: "ESFP là những người sống động, thân thiện và luôn mang lại không khí vui vẻ. Họ thích trải nghiệm, kết nối và thể hiện bản thân.",
    category: "explorer",
    color: "#f43f5e",
    strengths: ["Năng lượng tích cực", "Giao tiếp tốt", "Linh hoạt", "Thực tế"],
    weaknesses: ["Khó lập kế hoạch dài hạn", "Dễ bị ảnh hưởng cảm xúc", "Tránh xung đột sâu"],
    thinking: "Tập trung vào trải nghiệm và cảm xúc hiện tại.",
    interaction: "Thân thiện, nhiệt tình, thích vui vẻ.",
    decision: "Theo cảm xúc và sự hòa hợp xã hội.",
    learning: "Học qua trải nghiệm, tương tác và hoạt động nhóm.",
    careers: ["Sự kiện", "Giải trí", "Bán hàng", "Du lịch", "Chăm sóc khách hàng"],
    image: "performer"
  }
];

// ===== QUIZ QUESTIONS (Sample for MBTI-style) =====
const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: "Khi tham gia một buổi họp nhóm, bạn thường...",
    options: [
      { text: "Lắng nghe và suy nghĩ kỹ trước khi phát biểu", scores: { I: 2, E: 0 } },
      { text: "Tích cực chia sẻ ý kiến và dẫn dắt cuộc thảo luận", scores: { E: 2, I: 0 } },
      { text: "Quan sát rồi đóng góp khi cần thiết", scores: { I: 1, E: 1 } },
      { text: "Thích thảo luận sôi nổi và đưa ra nhiều ý tưởng", scores: { E: 2, I: 0 } }
    ]
  },
  {
    id: 2,
    text: "Bạn thích học hỏi kiến thức mới theo cách nào nhất?",
    options: [
      { text: "Nghiên cứu sâu lý thuyết và mô hình", scores: { N: 2, S: 0 } },
      { text: "Thực hành và quan sát ví dụ cụ thể", scores: { S: 2, N: 0 } },
      { text: "Kết hợp cả lý thuyết và thực tế", scores: { N: 1, S: 1 } },
      { text: "Tìm hiểu qua câu chuyện và ý nghĩa sâu xa", scores: { N: 2, S: 0 } }
    ]
  },
  {
    id: 3,
    text: "Khi đưa ra quyết định quan trọng, bạn thường dựa vào...",
    options: [
      { text: "Logic, dữ liệu và phân tích khách quan", scores: { T: 2, F: 0 } },
      { text: "Cảm xúc, giá trị và tác động đến người khác", scores: { F: 2, T: 0 } },
      { text: "Cân bằng giữa logic và cảm xúc", scores: { T: 1, F: 1 } },
      { text: "Kinh nghiệm thực tế và quy trình đã có", scores: { T: 1, S: 1 } }
    ]
  },
  {
    id: 4,
    text: "Bạn cảm thấy thoải mái hơn khi...",
    options: [
      { text: "Có kế hoạch rõ ràng và tuân thủ lịch trình", scores: { J: 2, P: 0 } },
      { text: "Linh hoạt, để mọi thứ diễn ra tự nhiên", scores: { P: 2, J: 0 } },
      { text: "Có khung chung nhưng vẫn linh hoạt chi tiết", scores: { J: 1, P: 1 } },
      { text: "Hoàn thành từng việc một theo thứ tự ưu tiên", scores: { J: 2, P: 0 } }
    ]
  },
  {
    id: 5,
    text: "Trong thời gian rảnh, bạn thích...",
    options: [
      { text: "Ở một mình đọc sách hoặc suy ngẫm", scores: { I: 2, E: 0 } },
      { text: "Gặp gỡ bạn bè và tham gia hoạt động nhóm", scores: { E: 2, I: 0 } },
      { text: "Kết hợp cả thời gian riêng và xã hội", scores: { I: 1, E: 1 } },
      { text: "Thử những trải nghiệm mới cùng mọi người", scores: { E: 2, P: 1 } }
    ]
  },
  {
    id: 6,
    text: "Khi giải quyết vấn đề, bạn thường...",
    options: [
      { text: "Nhìn bức tranh tổng thể và tìm mẫu hình", scores: { N: 2, S: 0 } },
      { text: "Tập trung vào chi tiết và dữ liệu cụ thể", scores: { S: 2, N: 0 } },
      { text: "Bắt đầu từ thực tế rồi mở rộng ra ý tưởng", scores: { S: 1, N: 1 } },
      { text: "Đưa ra nhiều khả năng và thử nghiệm", scores: { N: 2, P: 1 } }
    ]
  },
  {
    id: 7,
    text: "Bạn đánh giá cao điều gì ở một người đồng nghiệp?",
    options: [
      { text: "Sự logic, trung thực và hiệu quả", scores: { T: 2, J: 1 } },
      { text: "Sự đồng cảm, hỗ trợ và hòa hợp", scores: { F: 2, E: 1 } },
      { text: "Sự sáng tạo và linh hoạt", scores: { N: 1, P: 2 } },
      { text: "Sự đáng tin cậy và trách nhiệm", scores: { J: 2, S: 1 } }
    ]
  },
  {
    id: 8,
    text: "Khi có thay đổi đột ngột trong kế hoạch, bạn...",
    options: [
      { text: "Cảm thấy khó chịu và cần thời gian thích nghi", scores: { J: 2, S: 1 } },
      { text: "Linh hoạt thích nghi và tìm cơ hội mới", scores: { P: 2, N: 1 } },
      { text: "Phân tích lại và điều chỉnh kế hoạch", scores: { J: 1, T: 1 } },
      { text: "Theo dòng chảy và tận dụng tình huống", scores: { P: 2, E: 1 } }
    ]
  },
  {
    id: 9,
    text: "Bạn thích môi trường làm việc như thế nào?",
    options: [
      { text: "Yên tĩnh, tập trung, ít bị gián đoạn", scores: { I: 2, J: 1 } },
      { text: "Năng động, nhiều tương tác và ý tưởng", scores: { E: 2, N: 1 } },
      { text: "Có cấu trúc rõ ràng và quy trình ổn định", scores: { J: 2, S: 1 } },
      { text: "Linh hoạt, sáng tạo và tự do thể hiện", scores: { P: 2, N: 1 } }
    ]
  },
  {
    id: 10,
    text: "Khi nhận phản hồi, bạn muốn người khác...",
    options: [
      { text: "Nói thẳng, dựa trên sự thật và logic", scores: { T: 2, I: 1 } },
      { text: "Khéo léo, quan tâm đến cảm xúc của bạn", scores: { F: 2, E: 1 } },
      { text: "Đưa ra ví dụ cụ thể và cách cải thiện", scores: { S: 2, T: 1 } },
      { text: "Khuyến khích và tập trung vào điểm mạnh", scores: { F: 2, N: 1 } }
    ]
  },
  {
    id: 11,
    text: "Bạn thường lập kế hoạch cho tuần tới như thế nào?",
    options: [
      { text: "Liệt kê chi tiết từng việc và thời gian", scores: { J: 2, S: 1 } },
      { text: "Có vài mục tiêu chính, còn lại linh hoạt", scores: { P: 1, J: 1 } },
      { text: "Để mọi thứ tự nhiên, xử lý khi đến", scores: { P: 2, E: 1 } },
      { text: "Ưu tiên những việc quan trọng và có ý nghĩa", scores: { N: 1, J: 1 } }
    ]
  },
  {
    id: 12,
    text: "Điều gì khiến bạn cảm thấy tràn đầy năng lượng?",
    options: [
      { text: "Thời gian yên tĩnh để suy nghĩ và nạp lại", scores: { I: 2 } },
      { text: "Gặp gỡ mọi người và chia sẻ ý tưởng", scores: { E: 2 } },
      { text: "Hoàn thành một dự án đúng hạn", scores: { J: 2 } },
      { text: "Khám phá điều mới và thử thách bản thân", scores: { N: 1, P: 1 } }
    ]
  }
];

// ===== TESTS LIST =====
const TESTS = [
  {
    id: "riasec",
    name: "RIASEC",
    description: "Khám phá sở thích nghề nghiệp theo 6 nhóm tính cách nghề nghiệp của Holland.",
    time: "8–12 phút",
    questions: 42,
    icon: "compass",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "bigfive",
    name: "Big Five",
    description: "Đo lường 5 yếu tố tính cách lớn: Cởi mở, Tận tâm, Hướng ngoại, Dễ chịu, Ổn định cảm xúc.",
    time: "10–15 phút",
    questions: 50,
    icon: "layers",
    color: "from-indigo-500 to-purple-400"
  },
  {
    id: "mbti",
    name: "MBTI",
    description: "Khám phá 16 nhóm tính cách dựa trên 4 cặp đối lập: Năng lượng, Nhận thức, Ra quyết định, Phong cách sống.",
    time: "10–15 phút",
    questions: 12,
    icon: "brain",
    color: "from-sky-500 to-cyan-400"
  },
  {
    id: "interest",
    name: "Sở thích nghề nghiệp",
    description: "Tìm hiểu lĩnh vực và hoạt động bạn thực sự yêu thích để định hướng nghề nghiệp.",
    time: "6–10 phút",
    questions: 30,
    icon: "heart",
    color: "from-rose-500 to-pink-400"
  },
  {
    id: "full",
    name: "Hồ sơ hướng nghiệp tổng hợp",
    description: "Kết hợp nhiều bài test để xây dựng hồ sơ tính cách và hướng nghiệp toàn diện.",
    time: "20–30 phút",
    questions: 80,
    icon: "file-text",
    color: "from-emerald-500 to-teal-400"
  }
];

// ===== CAREERS =====
const CAREERS = [
  { id: "it", name: "Công nghệ thông tin", icon: "code", desc: "Phát triển phần mềm, dữ liệu, AI, hệ thống.", match: 85 },
  { id: "design", name: "Thiết kế", icon: "palette", desc: "UI/UX, đồ họa, sản phẩm, trải nghiệm người dùng.", match: 72 },
  { id: "marketing", name: "Marketing", icon: "megaphone", desc: "Truyền thông, nội dung, thương hiệu, tăng trưởng.", match: 68 },
  { id: "business", name: "Kinh tế – Kinh doanh", icon: "trending-up", desc: "Quản trị, tài chính, khởi nghiệp, phân tích.", match: 78 },
  { id: "engineering", name: "Kỹ thuật", icon: "settings", desc: "Cơ khí, điện, xây dựng, tự động hóa.", match: 65 },
  { id: "education", name: "Giáo dục", icon: "book-open", desc: "Giảng dạy, đào tạo, phát triển học liệu.", match: 80 },
  { id: "health", name: "Y tế – Chăm sóc", icon: "heart-pulse", desc: "Y khoa, điều dưỡng, tâm lý, sức khỏe cộng đồng.", match: 70 },
  { id: "logistics", name: "Logistics – Vận hành", icon: "truck", desc: "Chuỗi cung ứng, kho vận, tối ưu quy trình.", match: 60 }
];

// ===== INTRO CARDS =====
const INTRO_CARDS = [
  { icon: "user", title: "Hiểu bản thân", desc: "Khám phá điểm mạnh, điểm yếu và cách bạn vận hành trong cuộc sống." },
  { icon: "zap", title: "Khám phá điểm mạnh", desc: "Nhận diện năng lực nổi bật để phát huy tối đa tiềm năng." },
  { icon: "heart", title: "Khám phá sở thích", desc: "Tìm hiểu những gì thực sự khiến bạn hứng thú và gắn bó." },
  { icon: "compass", title: "Định hướng nghề nghiệp", desc: "Gợi ý nhóm nghề phù hợp dựa trên tính cách và giá trị." }
];
