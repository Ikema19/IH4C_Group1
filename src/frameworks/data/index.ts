import { Course as BaseCourseType, Spot, Id, DeepReadonly } from "@/@types";

export const spots = [
  {
    id: "1",
    name: "上越市立水族博物館 うみがたり",
    description:
      "日本海の四季折々の様子を感じながら楽しむことができます。館内は大水槽と日本海の一面が一体となって見える「日本海テラス」や、飼育数日本一のマゼランペンギン(100匹以上)など見どころが数多く存在します。 ",
    category: "博物館・美術館",
    photo: "https://example.com/photo1.jpg",
    geometry: {
      location: {
        //緯度
        lat: 37.17362,
        //経度
        lng: 138.23292,
      },
    },
  },
  {
    id: "2",
    name: "妙高サンシャインランド",
    description:
      "妙高サンシャインホテルや妙高サンシャインゴルフ倶楽部に隣接している遊園地で、多くのアトラクションが存在します。4月には1500本の桜を見下ろせるイベントも開催。",
    category: "レジャー・スポーツ・体験施設",
    photo: "https://example.com/photo2.jpg",
    geometry: {
      location: {
        lat: 36.94926,
        lng: 138.21197,
      },
    },
  },
  {
    id: "3",
    name: "上越科学館",
    description:
      "人間の科学、雪の科学をテーマにしている科学博物館です。模型やミニゲームなどによる展示を行っており、子どもが興味関心を持てるイベントを多く開催しています。",
    category: "レジャー・スポーツ・体験施設",
    photo: "https://example.com/photo3.jpg",
    geometry: {
      location: {
        lat: 37.15382,
        lng: 138.25225,
      },
    },
  },
  {
    id: "4",
    name: "うみてらす名立",
    description:
      "食べる、寛ぐ、遊ぶがひとつになった複合施設。「食べる」では、近隣漁港で水上げされた魚介類を堪能できます。「寛ぐ」では露天風呂やサウナなどがあり、「遊ぶ」では、一年中遊べるプールが存在し、夏季のみ海水プールを楽しむことができます。",
    category: "宿泊",
    photo: "https://example.com/photo4.jpg",
    geometry: {
      location: {
        lat: 37.16306,
        lng: 138.086,
      },
    },
  },
  {
    id: "5",
    name: "岩の原葡萄園",
    description:
      "ぶどう狩りは行っていませんが、園内を散策することが可能で、散策の途中では記念館や石蔵、農舎といったワイン造りに欠かせないものを見学できます。ワインショップでは園内で作られたワインの販売も行っており、試飲も可能です。最後のレストランでは岩の原ワインと越後の食を堪能できます。",
    category: "お土産・物産",
    photo: "https://example.com/photo5.jpg",
    geometry: {
      location: {
        lat: 37.08852,
        lng: 138.351,
      },
    },
  },
  {
    id: "6",
    name: "鵜の浜海岸温泉",
    description:
      "海水浴をはじめサーフィンなどのマリンスポーツも盛んな場所です。また地引網体験もでき、イベントも充実しています。捕れた魚は持ち帰り、または宿泊の宿で調理も可能。また、恋人の聖地ということで石像と金の看板があり、カップルにもおすすめです。",
    category: "レジャー・スポーツ・体験施設",
    photo: "https://example.com/photo6.jpg",
    geometry: {
      location: {
        lat: 37.24176,
        lng: 138.33796,
      },
    },
  },
  {
    id: "7",
    name: "高田城址公園",
    description:
      "高田城跡に作られた公園。新潟県の史跡に指定されています。園内には復元された櫓や博物館など様々な施設があります。特に桜は有名で公園周辺も含めると4000本もあるといわれております。",
    category: "歴史・文化",
    photo: "https://example.com/photo7.jpg",
    geometry: {
      location: {
        lat: 37.10803,
        lng: 138.2548,
      },
    },
  },
] as const satisfies DeepReadonly<Spot[]>;

type Course = Omit<BaseCourseType, "route"> & {
  route: Id[];
};

export const courses = [
  {
    id: "1",
    route: ["1", "3", "4"],
  },
  {
    id: "2",
    route: ["2", "4"],
  },
  {
    id: "3",
    route: ["3", "1", "4"],
  },
  {
    id: "4",
    route: ["5", "5", "4"],
  },
  {
    id: "5",
    route: ["4"],
  },
] as const satisfies DeepReadonly<Course[]>;
