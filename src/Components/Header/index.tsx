import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../styles/Layout/styles';


import * as C from './styles';

type ThemeProps = {
    toggleTheme: () => void;
    showTheme: boolean;
}

const Header: React.FC<ThemeProps> = ({ toggleTheme, showTheme }) => {

    const [dropdown, setDropdown] = useState(false);
    const showDropdownSettings = () => setDropdown(!dropdown);

  return (
      <HeaderContainer>
          <C.AreaIcons>
                <C.Mail/>
                <C.Chat/>
                <C.Todo/>
                <C.Calendar/>
          </C.AreaIcons>
          <C.ContainerRight>
               <C.ContainerBtnTheme>
                   {showTheme ? <C.Dark onClick={toggleTheme}/> : <C.Light onClick={toggleTheme}/>}
                     
                    <C.Search/>
                    <div>
                        <C.Cart/>
                        <span>5</span>
                    </div>
                    <div>
                    <C.Bell/>
                    <span>11</span>
                    </div>
               </C.ContainerBtnTheme>
                <C.AreaAdmin>
                    <div>
                        <h3>Patrick Anjos</h3>
                        <p>Admin</p>
                    </div>
                    <C.ContainerAvarat>
                        <img src="https://avatars.githubusercontent.com/u/69186374?s=400&u=793e08633e0ae7ee1f80b098767b3bdb5989c57c&v=4" alt="" onClick={showDropdownSettings}/>
                        <span></span>
                        <C.ContainerDropdown mode={dropdown}>
                            <C.ContainerSettings>
                                <Link to="/">Profile</Link>
                                <Link to="/">In box</Link>
                                <Link to="/">Tasks</Link>
                                <Link to="/">Chats</Link>
                              
                                <Link to="">Setting</Link>
                                <Link to="">Pricing</Link>
                                <Link to="">FAQ</Link>
                                <Link to="">Logout</Link>
                            </C.ContainerSettings>
                        </C.ContainerDropdown>
                    </C.ContainerAvarat>
                </C.AreaAdmin>
          </C.ContainerRight>
      </HeaderContainer>
  );
}

export default Header;