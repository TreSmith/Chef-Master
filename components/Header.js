import { Padding } from '@mui/icons-material';
import SearchBarWithIcon from './SearchBarWithIcon';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logoSection">
          <img
            src="/img/logos/chefMasterLogo.png"
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
          {/* <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-3"
            id="searchBar"
          />
          <div>
            <SearchIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
