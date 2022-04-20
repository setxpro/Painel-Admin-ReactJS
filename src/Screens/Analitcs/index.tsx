import React from 'react';
import AnimationChart from '../../Components/Charts/AnimationChart';
import ChartTop from '../../Components/Charts/ChartTop';
import LineChart from '../../Components/Charts/LineChart';

import * as C from './styles';

const Analitcs: React.FC = () => {
  return (
    <C.Container>
        <C.MessageArea>
            <C.ContentArea>
              <C.AreaMessage>
                  <h2>Congratulations Patrick</h2>
              </C.AreaMessage>
              <C.DashboardArea>
                <C.User/>
                <span>92.6k</span>
                <p>Subscribers Gained</p>
                <ChartTop/>
              </C.DashboardArea>
              <C.DashboardArea>
                <C.Box/>
                <span>97.5k</span>
                <p>Orders Received</p>
                <LineChart/>
                </C.DashboardArea>
            </C.ContentArea>

            <C.ContentAreaMiddle>
              <C.AreaContentPrice><AnimationChart/></C.AreaContentPrice>
              <C.AreaContentPrice><AnimationChart/></C.AreaContentPrice>
            </C.ContentAreaMiddle>

            <C.ContentArea>
                <C.AreaUserTimeLine>User Timeline</C.AreaUserTimeLine>
                <C.AreaSales>
                  
               </C.AreaSales>
                <C.AreaAppDesign>App Design</C.AreaAppDesign>
            </C.ContentArea>
        </C.MessageArea>
        <C.TabArea>
          <C.InputAreaTab>
              <input type="search" name='search' placeholder='Search Client...'/>
          </C.InputAreaTab>
          <table>
            <tr>
              <th>#</th>
              <th><C.ChartLine/></th>
              <th>CLIENT</th>
              <th>TOTAL</th>
              <th>Date</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>#1</td>
              <td><C.Success/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#2</td>
              <td><C.Warning/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#3</td>
              <td><C.Danger/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#4</td>
              <td><C.Success/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#5</td>
              <td><C.Danger/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#6</td>
              <td><C.Success/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#7</td>
              <td><C.Warning/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#8</td>
              <td><C.Danger/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#9</td>
              <td><C.Success/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>#10</td>
              <td><C.Danger/></td>
              <td>Patrick Anjos</td>
              <td>R$ 85,00</td>
              <td>32 sep 2022</td>
              <td><span>Paid</span></td>
              <td>
                <div>
                  <button><C.Send/></button>
                  <button><C.Eye/></button>
                  <button><C.More/></button>
                </div>
              </td>
            </tr>
          </table>
        </C.TabArea>
    </C.Container>
  );
}

export default Analitcs;