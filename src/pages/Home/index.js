import SearchInput from './components/search-input';
import './index.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <div className='title'>DOADD</div>
        <div className='description'>Decentralized Open Access Article Database</div>
        <div className='search-input'>
          <SearchInput placeholder='Enter title or description of article' size='large' style={{ width: 600, borderRadius: 1 }} />
        </div>
      </div>
      <div className='section intro'>
        <div className='title'>Intro</div>
        <div className='content'>
          <div>
            <p>
              DOADD是什么
            </p>
            <p>
              DOADD致力于xxxx
            </p>
            <p>
              DOADD使用的方法
            </p>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='title'>RoadMap</div>
        <div className='content'>
          <div className='roadmap-item'>
            <img alt='icon' src="https://joeschmoe.io/api/v1/random" />
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div className='roadmap-item'>
            <img alt='icon' src="https://joeschmoe.io/api/v1/random" />
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div className='roadmap-item'>
            <img alt='icon' src="https://joeschmoe.io/api/v1/random" />
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>
      </div>
      <div className='section team'>
        <div className='title'>Team</div>
        <div className='content'>
          <div className='member'>
            <img alt='member' src="https://joeschmoe.io/api/v1/random" />
            <div className='member-desc'>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div className='member'>
            <img alt='member' src=" https://joeschmoe.io/api/v1/random" />
            <div className='member-desc'>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div className='member'>
            <img alt='member' src=" https://joeschmoe.io/api/v1/random" />
            <div className='member-desc'>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div className='member'>
            <img alt='member' src="https://joeschmoe.io/api/v1/random" />
            <div className='member-desc'>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
