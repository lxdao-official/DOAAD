import React from 'react';
import logo from '../../assets/logo.png';
import SearchInput from '../../components/search-input';

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: logo,
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '导航入口',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3 ldfl1dtohjk-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'DOADD',
        // texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: 'Decentralized Access Article Database',
      },
      { name: 'name', className: 'banner3-button', children: <SearchInput /> },
    ],
  },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Intro',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'RoadMap', className: 'title-h1' }],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          title: { className: 'block-title', children: '开幕致辞' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Team' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'copyright',
        children: 'Copyright © LXDAO',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
    ],
  },
};
