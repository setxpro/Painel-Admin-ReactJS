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

    const [showInputSearch, setShowIputSearch] = useState(false);
    const toggleInput = () => setShowIputSearch(!showInputSearch);

  return (
      <HeaderContainer>
          <C.ShadowArea  mode={!showInputSearch}>
            <C.AreaIcons>
                    <div>
                        <Link to="/email"><C.Mail/></Link>
                        <span>Email</span>
                    </div>
                    <div>
                        <Link to=""><C.Chat/></Link>
                        <span>Chat</span>
                    </div>
                    <div>
                    <Link to=""><C.Todo/></Link>
                        <span>To do</span>
                    </div>
                    <div>
                    <Link to=""><C.Calendar/></Link>
                        <span>Calendário</span>
                    </div>
            </C.AreaIcons>
          </C.ShadowArea>
          <C.ContainerRight>
               <C.ContainerBtnTheme>
                   {showTheme ? <C.Light onClick={toggleTheme}/> : <C.Dark onClick={toggleTheme}/>}
                     
                    <C.AraInputSearch mode={!showInputSearch}>
                        <C.Search onClick={toggleInput}/>
                        <C.AreaInput  mode={!showInputSearch}>
                            <div>
                                <input type="text" name='search' placeholder='Digite alguma coisa...'/>
                                <C.CloseSearch  onClick={toggleInput}/>
                            </div>
                        </C.AreaInput>
                    </C.AraInputSearch>
                    <div>
                        <C.Cart/>
                        <span>5</span>
                    </div>
                    <div>
                    <C.Bell/>
                    <span>11</span>
                    </div>
               </C.ContainerBtnTheme>
                <C.AreaAdmin  mode={!showInputSearch}>
                    <div>
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
                    </div>
                </C.AreaAdmin>
          </C.ContainerRight>
      </HeaderContainer>
  );
}

export default Header;