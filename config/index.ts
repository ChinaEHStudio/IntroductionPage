import simpleTheme from "../themes/EHStudio";

const config = {
  // global site information configuration
  site: {
    name: "二哈工作室", // site name
    title: "EHStudio.", // site title
    description: "一个为广大青少年提供的技术交流平台", // site description
    slogan: ["公益", "技术栈广", "友好"], // slogans
    owner: "LogTure Team", // site owner, used in footer copyright
  },
  // post configuration
  post: {
    folder: "posts", // post storage folder
    title: "博客", // post title (displayed on the index page and on the posts page)
    description: "二哈的博客", // post description (displayed only on the posts page)
    indexDescription: "在博客页阅读更多文章", // post description (displayed only on the index page)
    readMore: "更多", // read more text on the index page
    postsToDisplay: 6, // number of posts to display on the index page
    noPostText: "空空如也", // text to display when no posts exist for the current section
  },
  // tag configuration
  tags: {
    // {{tag}} is the template string format in LogTure used to inject variables into the current string template
    description: "Posts tagged with tag {{tag}}.", // tag description (displayed only on the tag page)
    title: "Tag {{tag}}", // tag title (displayed on the tag page)
    // configuration for the `all tags` page
    allTags: {
      title: "Tags", // title (displayed on the all tags page)
      description: "All tags", // description (displayed only on the all tags page)
      postCount: "{{count}} posts", // post count description (displayed on the all tags page)
    },
  },
  // navbar links configuration
  links: [
    {
      text: "首页", // link text
      link: "/", // link url
    },
    {
      text: "博客",
      link: "/posts",
    },
    {
      text: "分类",
      link: "/tags",
    },
    {
      text: "项目",
      link: "/sections/projects",
    },
    {
      text: "GitHub",
      link: "https://github.com/ChinaEHStudio",
    },
  ],
  // custom sections configuration
  custom: [
    {
      // section data, can be either an array of objects
      // or a string (see the `Join us` section below)
      data: [
        // if data is an array, then each object in the array
        // represents a card with certain information
        {
          title: "EHWorld", // card title
          // card description
          description:
            "A sandbox website",
          cover: "https://avatars.githubusercontent.com/u/90673198?s=200&v=4", // card cover, shown on the left of card description
          link: "https://github.com/ChinaEHStudio", // the link to navigate to when clicking on the card
        }
      ],
      name: "项目", // section name (title)
      description: "项目列表", // section description
      slug: "projects", // section slug, needed if the creation of a new page containing only this section is needed
      newPage: true, // weather to create a single page under `/sections/[slug]` or not
      showOnIndex: false, // weather to show the current section on the index page or not
    },
    {
      data: [
        {
          title: "Bdbmzwsc",
          description:
            "吉祥物+管理员",
          cover: "https://avatars.githubusercontent.com/u/88311279?v=4",
          link: "https://bdbmzwsc.top",
        },
        {
          title: "samzhangjy",
          description:
            "woman+管理员",
          cover: "https://avatars.githubusercontent.com/u/56634385?s=70&v=4g",
          link: "https://samzhangjy.com",
        },
        {
          title: "Adkimsm",
          description:
            "管理员+开发组",
          cover: "https://avatars.githubusercontent.com/u/75924586?s=70&v=4",
          link: "https://github.com/Adkimsm",
        }
      ],
      name: "成员",
      description: "成员列表",
      slug: "members",
      newPage: false,
    },
    // section data can also be a string, in which case it will be used as the main content of the section
    {
      data: `二哈工作室是一个为广大青少年提供编程技术交流的平台，您无需为二哈贡献任何代码，二哈只是一个帮助您找到更多开发者的社区，同时，我们也有自己的开发组，在二哈工作室的任何人都可以申请加入`,
      name: "加入我们",
      description: "一个交流平台",
      slug: "join-us",
      newPage: false,
    },
  ],
  showPoweredBy: true, // change it to false if you want to hide the `Powered by LogTure` text and remove the console.log message
  footer: `
    Made with ❤️ by 
    <a href="https://github.com/samzhangjy" rel="noreferrer" target="_blank">
      samzhangjy
    </a>.
  `, // extra footer content, can include HTML tags
  theme: simpleTheme, // theme config
};

export default config;
