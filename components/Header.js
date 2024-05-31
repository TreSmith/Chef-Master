const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logoSection">
          <img
            src="../static/images/logos/chefMasterLogo.png"
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
              src="../static/images/logos/chefMasterProfileLogo.png"
              className="chef-master-profile-logo"
              alt="chef master profile logo"
              id="chefMasterProfileLogo"
            />
          </div>

          <i className="fas fa-search">Search</i>
        </div>
      </div>
    </div>
  );
};

export default Header;
