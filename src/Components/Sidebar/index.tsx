import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContainer } from '../../styles/Layout/styles';

import * as C from './styles';

const Sidebar: React.FC = () => {

    const [drop, setDrop] = useState(false);
    const dropMode = () => setDrop(!drop);

    const [active, setActive] = useState(true);
    const isActive = () => setActive(!active);

  return (
      <SidebarContainer>
          <C.Container>
          <C.AreaLogo><img src="https://www.selfitacademias.com.br/wp-content/uploads/2020/07/logo_ajust.png" alt='logo'/></C.AreaLogo>
            <C.ContainerScroll>
                    <details>
                        <summary onClick={dropMode}>Options {drop ? <C.ArrowUp/> : <C.ArrowDown/>}</summary>
                           <Link to="/" onClick={isActive} ><span></span>Analytcs</Link>
                            <Link to="/comercio-eletronico" onClick={isActive}><span></span>Comércio eletrônico</Link>
                    </details>
                    <h2>APPS & PAGES</h2>

                    <nav>
                        <ul>
                        <Link to="">
                            <li><C.Mail/>
                                email
                            </li>
                            </Link>
                            <Link to="">
                            <li><C.Chat/>
                                Chat
                            </li>
                            </Link>
                            <Link to="">
                            <li><C.Todo/>
                                To do
                            </li>
                            </Link>
                            <Link to="">
                            <li><C.Calendar/>
                                Calendar
                            </li>
                            </Link>
                    
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary className='word-w'><C.Paper/> Roles<C.ArrowDown/></summary>
                                        <Link to=""><span></span>Roles</Link>
                                        <Link to=""><span></span>Permissions</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>
                            <C.DropDown>
                                <details>
                                    <summary><C.Calendar/> Invoice <C.ArrowDown/></summary>
                                        <Link to=""><span></span>List</Link>
                                        <Link to=""><span></span>Preview</Link>
                                        <Link to=""><span></span>Edit</Link>
                                        <Link to=""><span></span>Add</Link>
                                </details>
                            </C.DropDown>

                        </ul>
                    </nav>
            </C.ContainerScroll>
          </C.Container>
      </SidebarContainer>
  );
}

export default Sidebar;