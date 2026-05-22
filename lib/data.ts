export const personalInfo = {
  nameJa: "佐藤健一",
  nameEn: "Kenichi Sato",
  birthDate: "1991年4月12日",
  age: 34,
  location: "東京都世田谷区",
  nationality: "日本",
  role: "フルスタック開発者 / AIエンジニア",
  catchphrase:
    "堅牢なシステム設計とイノベーションを、チームと共に実現する。",
  selfPR:
    "イノベーションを重視するチームの一員として、私がこれまでに培ってきた10年間のシステム設計およびリーダーシップの経験を活かすことこそが、私の目標です。SIerとSaaS、双方の環境で培った私のバックグラウンドは、多角的に貢献できる貴重な財産です。",
  strengths: [
    "実務コーディングと技術プロジェクトマネジメントのバランス",
    "SIer（Nexa Systems）とSaaS（Streamline Tech）双方の経験",
    "地元開発者コミュニティでの活動参加（東京都世田谷区）",
    "10年間のシステム設計およびリーダーシップ経験",
    "イノベーションを重視するチームへの貢献意欲",
  ],
};

export const education = [
  {
    period: "2010年4月1日 - 2014年3月20日",
    university: "神奈川工科大学",
    location: "厚木市",
    major: "コンピュータサイエンス専攻",
    description:
      "分散システムおよびデータベースアーキテクチャに重点を置いた学習。",
    degree: "工学士号取得",
  },
];

export const workExperience = [
  {
    period: "2014年4月1日 - 2018年8月31日",
    company: "Nexa Systems株式会社",
    location: "横浜拠点",
    role: "フルスタックエンジニア",
    technologies: ["Java", "Spring Boot"],
    description:
      "地域物流企業クライアント向けレガシー在庫管理システムのクラウドネイティブWebアーキテクチャへの移行プロジェクトを主導・管理。",
    achievement: "4名の開発者チームを率いて無事移行完了。",
  },
  {
    period: "2018年10月1日 - 現在",
    company: "Streamline Tech株式会社",
    location: "渋谷拠点",
    role: "シニアデベロッパー",
    technologies: ["Go", "TypeScript", "Next.js", "AWS"],
    description:
      "B2B向け自動請求書処理プラットフォームの管理・運用責任。OCR（光学文字認識）や機械学習機能のシステム統合を統括。",
    achievement: "企業ユーザー向けデータ精度向上を実現。",
  },
];

export const techStack = [
  {
    category: "言語/フレームワーク",
    items: ["Go", "TypeScript", "Next.js"],
  },
  {
    category: "クラウド",
    items: ["AWS Lambda", "AWS ECS"],
  },
  {
    category: "IaC/コンテナ",
    items: ["Docker", "Terraform"],
  },
  {
    category: "フロントエンド",
    items: ["Next.js", "高性能フロントエンドUI構築"],
  },
  {
    category: "その他スキル",
    items: [
      "エンタープライズレベルのセキュリティ確保",
      "アジャイル開発体制の維持",
      "複雑なビジネス要件から堅牢な技術仕様への変換",
    ],
  },
];

export const featuredProjects = [
  {
    title: "物流企業レガシーシステム移行",
    company: "Nexa Systems株式会社",
    period: "2014年 - 2018年",
    description:
      "地域物流企業向けレガシー在庫管理システムをクラウドネイティブWebアーキテクチャへ移行。4名チームのリードとしてプロジェクトを完遂。",
    technologies: ["Java", "Spring Boot", "クラウド移行", "チームリード"],
    achievement: "レガシー在庫管理システムのクラウドネイティブ移行を無事完了。",
  },
  {
    title: "B2B自動請求書 OCR/AI統合",
    company: "Streamline Tech株式会社",
    period: "2018年 - 現在",
    description:
      "B2B向け自動請求書処理プラットフォームにOCR・機械学習機能を統合。データ精度の向上と運用効率化を実現。",
    technologies: ["OCR", "機械学習", "Go", "AWS"],
    achievement: "企業ユーザー向けデータ精度向上を実現。",
  },
  {
    title: "地域開発者コミュニティ活動",
    company: "東京都世田谷区",
    period: "継続中",
    description:
      "地元開発者コミュニティへの参加・知識共有。技術登壇やメンタリングを通じてエコシステムへの貢献。",
    technologies: ["コミュニティ運営", "メンタリング", "技術登壇"],
    achievement: "地域エコシステムへの継続的な貢献。",
  },
];

export const contact = {
  email: "kenichi.sato@example.com",
  github: "#",
  linkedin: "#",
};
