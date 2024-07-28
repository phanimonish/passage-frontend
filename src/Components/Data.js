const Posts = [
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQFIWhGYSxoTgQ/profile-displayphoto-shrink_200_200/0/1693842838699?e=2147483647&v=beta&t=6koLl_P0LIOyA-w8MpODHa9WGhUyeGw47ws3P4A2MzA",
    name: "Phani Monish",
    head: "React Design Patterns",
    description:
      "In frontend development with React, the application of the design patterns has become an essential practice.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image: "https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png",
  },
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQGdcO5BY-xoxA/profile-displayphoto-shrink_200_200/0/1685963521446?e=2147483647&v=beta&t=I0iHjzKDC5KkZ8xjvLrwjln_8CTMqdp437wqKy071r0",
    name: "Rajesh Yemineni",
    head: "How to Implement JavaScript Decorators",
    description:
      "JavaScript decorators are a powerful feature that allows you to modify the behavior of classes and their members in a declarative manner. Initially popularized in other programming languages",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*nIO9zHIGk94uWLQ-XwRd9g.png",
  },
  {
    id: 2,
    user: "https://media.licdn.com/dms/image/D5603AQEr8CiMhHr_BA/profile-displayphoto-shrink_200_200/0/1679824862201?e=2147483647&v=beta&t=8HOEnRQDVodL0wEsdOyKM0f9sYPHuNS3VC01jLhfhEc",
    name: "Harsha. K",
    head: "JavaScript Debugging Techniques",
    description:
      "Debugging is an important skill for any JavaScript developer. Being able to identify and fix bugs quickly and efficiently can save a lot of time and frustration.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*rqyzbStlwjr_MgKARlu43w.png",
  },
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQEFLiRPCksvLQ/profile-displayphoto-shrink_400_400/0/1712422117685?e=1727308800&v=beta&t=XqLQt1vg74_0FjXoL4UEH9q-xHH3O2EwOCsjEwqzNFs",
    name: "Yuva Samrat (Nitss)",
    head: "Avoid These 5 Mistakes as a Developer",
    description:
      "We all make mistakes. It’s the most efficient way to learn, grow, and build experience. You can improve yourself if you reflect and learn from your mistakes.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*uvEfXPVBntVKAyCG.jpg",
  },
  {
    id: 2,
    user: "https://media.licdn.com/dms/image/C5603AQE8dhZSwZDixw/profile-displayphoto-shrink_200_200/0/1661919043962?e=2147483647&v=beta&t=M0114ydj_oBQaShd_1ED-6CWIzePhmGo2kiaCSAMBSk",
    name: "SriRam Reddy",
    head: "7 Useful Tools for Web Developers",
    description:
      "There are as many lessons in The Vampire Diaries as there are episodes, be it from the characters’ choices or the characters themselves.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*lkqKxKlrmhLGNndK.jpeg",
  },
  {
    id: 2,
    user: "https://img.wattpad.com/cover/56500541-288-k649902.jpg",
    name: "Klaus Mikaelson",
    head: "For Hope...",
    description:
      "My dearest Hope. My littlest wolf. My miracle child. What a gift to be able to leave you one last message. So please carry it with you in the years to come.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://www.theredheadsdiaries.it/wp-content/uploads/2018/04/TO403-068-Hope-Klaus-720x408.png",
  },
  {
    id: 3,
    user: "https://64.media.tumblr.com/54169e0712b885b7a0a34b00aa744400/tumblr_inline_ol4brv00dX1u5utwn_1280.jpg",
    name: "Elijah Mikaelson",
    head: "Always and Forever",
    description:
      "There are as many lessons in The Vampire Diaries as there are episodes, be it from the characters’ choices or the characters themselves.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image: "https://i.ytimg.com/vi/-kYviSIfCT4/maxresdefault.jpg",
  },
  {
    id: 4,
    user: "https://i.pinimg.com/236x/49/06/f5/4906f5d8a88a219896ef5835459b9f27.jpg",
    name: "Harvey Specter",
    head: "What are your choices if someone pulls a gun to your head?",
    description:
      "You take the gun, or you pull out a bigger one, or you call their bluff or you do anyone of the 146 other things",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://i.pinimg.com/736x/d8/3d/5a/d83d5a293660d33d2410339cb2a0e3ac.jpg",
  },
];
const FollowingPosts = [
  {
    id: 1,
    user: "https://img.wattpad.com/cover/56500541-288-k649902.jpg",
    name: "Klaus Mikaelson",
    head: "For Hope...",
    description:
      "My dearest Hope. My littlest wolf. My miracle child. What a gift to be able to leave you one last message. So please carry it with you in the years to come.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://www.theredheadsdiaries.it/wp-content/uploads/2018/04/TO403-068-Hope-Klaus-720x408.png",
  },
  {
    id: 2,
    user: "https://64.media.tumblr.com/54169e0712b885b7a0a34b00aa744400/tumblr_inline_ol4brv00dX1u5utwn_1280.jpg",
    name: "Elijah Mikaelson",
    head: "Always and Forever",
    description:
      "There are as many lessons in The Vampire Diaries as there are episodes, be it from the characters’ choices or the characters themselves.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image: "https://i.ytimg.com/vi/-kYviSIfCT4/maxresdefault.jpg",
  },
  {
    id: 3,
    user: "https://i.pinimg.com/236x/49/06/f5/4906f5d8a88a219896ef5835459b9f27.jpg",
    name: "Harvey Specter",
    head: "What are your choices if someone pulls a gun to your head?",
    description:
      "You take the gun, or you pull out a bigger one, or you call their bluff or you do anyone of the 146 other things",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://i.pinimg.com/736x/d8/3d/5a/d83d5a293660d33d2410339cb2a0e3ac.jpg",
  },
];
const JavascriptPosts = [
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQGdcO5BY-xoxA/profile-displayphoto-shrink_200_200/0/1685963521446?e=2147483647&v=beta&t=I0iHjzKDC5KkZ8xjvLrwjln_8CTMqdp437wqKy071r0",
    name: "Rajesh Yemineni",
    head: "How to Implement JavaScript Decorators",
    description:
      "JavaScript decorators are a powerful feature that allows you to modify the behavior of classes and their members in a declarative manner. Initially popularized in other programming languages",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*nIO9zHIGk94uWLQ-XwRd9g.png",
  },
  {
    id: 2,
    user: "https://media.licdn.com/dms/image/D5603AQEr8CiMhHr_BA/profile-displayphoto-shrink_200_200/0/1679824862201?e=2147483647&v=beta&t=8HOEnRQDVodL0wEsdOyKM0f9sYPHuNS3VC01jLhfhEc",
    name: "Harsha. K",
    head: "JavaScript Debugging Techniques",
    description:
      "Debugging is an important skill for any JavaScript developer. Being able to identify and fix bugs quickly and efficiently can save a lot of time and frustration.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*rqyzbStlwjr_MgKARlu43w.png",
  },
];
const ReactPosts = [
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQFIWhGYSxoTgQ/profile-displayphoto-shrink_200_200/0/1693842838699?e=2147483647&v=beta&t=6koLl_P0LIOyA-w8MpODHa9WGhUyeGw47ws3P4A2MzA",
    name: "Phani Monish",
    head: "React Design Patterns",
    description:
      "In frontend development with React, the application of the design patterns has become an essential practice.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image: "https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png",
  },
  {
    id: 2,
    user: "data:image/jpeg;base64,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",
    name: "Rajesh. Y",
    head: "All React JS Hooks Explained",
    description:
      "One of the key features that make React so powerful is its hooks.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*uSvwG_k_uSvNxjy6_KpJOQ.png",
  },
];
const WebDevelopmentPosts = [
  {
    id: 1,
    user: "https://media.licdn.com/dms/image/D5603AQEFLiRPCksvLQ/profile-displayphoto-shrink_400_400/0/1712422117685?e=1727308800&v=beta&t=XqLQt1vg74_0FjXoL4UEH9q-xHH3O2EwOCsjEwqzNFs",
    name: "Yuva Samrat (Nitss)",
    head: "Avoid These 5 Mistakes as a Developer",
    description:
      "We all make mistakes. It’s the most efficient way to learn, grow, and build experience. You can improve yourself if you reflect and learn from your mistakes.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*uvEfXPVBntVKAyCG.jpg",
  },
  {
    id: 2,
    user: "https://media.licdn.com/dms/image/C5603AQE8dhZSwZDixw/profile-displayphoto-shrink_200_200/0/1661919043962?e=2147483647&v=beta&t=M0114ydj_oBQaShd_1ED-6CWIzePhmGo2kiaCSAMBSk",
    name: "SriRam Reddy",
    head: "7 Useful Tools for Web Developers",
    description:
      "There are as many lessons in The Vampire Diaries as there are episodes, be it from the characters’ choices or the characters themselves.",
    date: "Jul 24",
    claps: "350",
    comments: "15",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*lkqKxKlrmhLGNndK.jpeg",
  },
];
export {
  Posts,
  FollowingPosts,
  JavascriptPosts,
  ReactPosts,
  WebDevelopmentPosts,
};
