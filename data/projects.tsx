export const projects: Project[] = [
  {
    title: '全导航',
    description: '🦖 基于 html 静态网站生成器实现导航',
    preview: '/img/project/web-nav.png',
    website: 'https://web.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'nav',
  },
  {
    title: 'av导航',
    description: '🦖 基于 html 静态网站生成器实现导航',
    preview: '/img/project/av-nav.png',
    website: 'https://av-nav.wangbin.org',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'nav',
  },
  {
    title: 'running彬',
    description: '🦖 基于 Vercel 自动部署，打造个人跑步主页。支持 Keep、佳明、佳明中国、Nike、悦跑圈、咕咚 及 Strava 等数据同步',
    preview: '/img/project/running.png',
    website: 'https://42195.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'nav',
  },
  // bookwiki
  {
    title: '读过的书&读书笔记',
    description: '🦖 基于 html 静态网站生成器实现的读书笔记',
    preview: '/img/project/book.png',
    website: 'https://book.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'bookwiki',
  },
  {
    title: '印象笔记',
    description: '🦖 基于 vue 网站生成器实现的',
    preview: '/img/project/yxbj.png',
    website: 'https://yxbj.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'bookwiki',
  },
  {
    title: '医学微视',
    description: '🦖 基于 vue 网站生成器实现的',
    preview: '/img/project/yxws.png',
    website: 'https://yxws2.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'bookwiki',
  },
  // love
  {
    title: '历史wiki',
    description: '🦖 基于 vue 网站生成器实现的',
    preview: '/img/project/history.png',
    website: 'https://history.wangbin.run',
    source: 'https://github.com/zuqiuxie',
    tags: ['opensource', 'design', 'favorite'],
    type: 'love',
  },
  // web
  {
    title: 'Look Scanned',
    description: 'Look Scanned 是一个能够让 PDF 看起来就像是扫描件一样的纯前端网站。你再也不需要麻烦地打印之后扫描了，你所需要的就是鼠标点几下。',
    preview: '/img/project/lookscanned.png',
    website: 'https://lookscanned.wangbin.run/',
    source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource', 'favorite'],
    type: 'web',
  },

]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  nav: '导航',
  bookwiki: '读书&知识库',
  love: '爱好',
  web: '网站',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
