import { Padding } from '@mui/icons-material';
import SearchBarWithIcon from './SearchBarWithIcon';
import { attributes } from '../content/settings/siteSettings.md';

const Header = () => {
  let {siteLogo} = attributes;

  return (
    <div className="header">
      <div className="header-left">
        <div className="logoSection">
          <img
            src={siteLogo}
            className="chef-master-logo"
            alt="chef master logo"
            id="chefMasterLogo"
          />
        </div>
        <div className="titleSection">
          <span className="chefMasterTitleText">ChefMaster</span>
        </div>

        <div className="header-right">
          <div className="logoSectionRight">
            <img
              src="/img/logos/chefMasterProfileLogo.png"
              className="chef-master-profile-logo"
              alt="chef master profile logo"
              id="chefMasterProfileLogo"
            />
          </div>
          <div style={{ Padding: '20px' }}>
            <SearchBarWithIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
