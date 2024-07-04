import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import Translate, { translate } from '@docusaurus/Translate'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '医疗器械工程师',
    }),
    text: (
      <Translate>
        从业有16年，国内一线医疗器械厂家工程师。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '跑步 & 运动',
    }),
    text: (
      <Translate>
        2016年开始跑步，参加过N次10km，2次全马。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '网站 & 看书 & 开源 & Github',
    }),
    text: (
      <Translate>
        喜欢电脑、22年接触到Github，一发不可收拾，虽然不是科班出身，摸索着算是看到了大门。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
