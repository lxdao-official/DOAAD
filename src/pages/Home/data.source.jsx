import React from 'react';
import LocaleSwitch from '../../components/locale-switch';
import SearchInput from '../../components/search-input';

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: (
          <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LocaleSwitch />
          </div>
        ),
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
        children: 'DOAAD是一套致力重构当前学术论文发表流程的去中心化应用，它不仅仅能让你的论文永久存储，还能让你从你创作的论文中直接获取经济奖励。',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '论文检索' },
          content: {
            className: 'content3-content',
            children:
              '快速检索所有链上论文',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '论文阅读' },
          content: {
            className: 'content3-content',
            children:
              '链上论文的在线阅读',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '论文发表' },
          content: {
            className: 'content3-content',
            children:
              '发表论文，并为所引用的论文支付稿费',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '奖励机制' },
          content: {
            className: 'content3-content',
            children:
              '当论文被其他论文创作者引用时获得代币奖励',
          },
        },
      }
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
          name: { className: 'block-main-title', children: 'Q1' },
          post: { className: 'block-post', children: '' },
          title: { className: 'block-title', children: '进一步调研用户，确定目标用户，识别用户需求，确保未来发展计划中的重心' },
          content: { className: 'block-content', children: '完善DAPP中论文的存储字段，使之更贴近现实中的论文结构，如：作者、摘要、关键词等等。添加文件上传功能，降低用户使用难度' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          name: { className: 'block-main-title', children: 'Q2' },
          post: { className: 'block-post', children: '' },
          title: { className: 'block-title', children: '重新设计UI，完善文章检索功能，最终达到和传统数据库无异的搜索速度' },
          content: { className: 'block-content', children: '设计基于ZK的用户DID子系统，保护用户隐私的同时实现作者链下身份与链上身份的对应，为作者提供更多链下价值，增加用户的作恶成本' },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          name: { className: 'block-main-title', children: 'Q3' },
          post: { className: 'block-post', children: '' },
          title: { className: 'block-title', children: '接入同行评审系统，设计同行评审奖励机制，提高DOAAD中所发布论文的质量' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          name: { className: 'block-main-title', children: 'Q4' },
          post: { className: 'block-post', children: '' },
          title: { className: 'block-title', children: '设计早期用户的奖励机制，招募高校推广大使，寻求合作组织，扩大社会影响力、知名度' },
          content: { className: 'block-content', children: '' },
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
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c47a35c-30c3-4e05-9fd3-4461c744e2e4/avatar_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T074533Z&X-Amz-Expires=86400&X-Amz-Signature=8a72af804eb0fb3e6e12e4a9543ae179d6151844ff3a91b0e5f58b96813f0e5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22avatar%2520%281%29.png%22&x-id=GetObject',
            },
            { name: 'title', className: 'teams1-title', children: '0xhardman' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Frontend Developer, Product Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c47a35c-30c3-4e05-9fd3-4461c744e2e4/avatar_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T074533Z&X-Amz-Expires=86400&X-Amz-Signature=8a72af804eb0fb3e6e12e4a9543ae179d6151844ff3a91b0e5f58b96813f0e5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22avatar%2520%281%29.png%22&x-id=GetObject',
            },
            { name: 'title', className: 'teams1-title', children: '0xhardman' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Frontend Developer, Product Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c47a35c-30c3-4e05-9fd3-4461c744e2e4/avatar_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T074533Z&X-Amz-Expires=86400&X-Amz-Signature=8a72af804eb0fb3e6e12e4a9543ae179d6151844ff3a91b0e5f58b96813f0e5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22avatar%2520%281%29.png%22&x-id=GetObject',
            },
            { name: 'title', className: 'teams1-title', children: '0xhardman' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Frontend Developer, Product Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c47a35c-30c3-4e05-9fd3-4461c744e2e4/avatar_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T074533Z&X-Amz-Expires=86400&X-Amz-Signature=8a72af804eb0fb3e6e12e4a9543ae179d6151844ff3a91b0e5f58b96813f0e5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22avatar%2520%281%29.png%22&x-id=GetObject',
            },
            { name: 'title', className: 'teams1-title', children: '0xhardman' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Frontend Developer, Product Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c47a35c-30c3-4e05-9fd3-4461c744e2e4/avatar_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T074533Z&X-Amz-Expires=86400&X-Amz-Signature=8a72af804eb0fb3e6e12e4a9543ae179d6151844ff3a91b0e5f58b96813f0e5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22avatar%2520%281%29.png%22&x-id=GetObject',
            },
            { name: 'title', className: 'teams1-title', children: '0xhardman' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Frontend Developer, Product Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '',
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
