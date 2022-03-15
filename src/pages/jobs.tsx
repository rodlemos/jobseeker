import React from 'react';
import { TiInputChecked } from 'react-icons/ti';
import { Button } from '../components/Buttons';
import { Cards } from '../components/Cards';
import JobListContainer from '../components/JobListContainer';
import {
  JobInfo,
  JobList,
  JobNav,
  JobsBox,
} from '../components/JobsPageComponents';
import Navbar from '../components/Navbar';
import { Divisor } from '../components/Divisor';

export default function JobsPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <JobsBox>
        <Cards>
          <div className="grid">
            <JobNav>
              <form>
                <select>
                  <option>Data do Anúncio</option>
                </select>

                <select>
                  <option>Nível de experiência</option>
                </select>

                <select>
                  <option>Tipo de Vaga</option>
                </select>
              </form>
            </JobNav>

            <JobList>
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
              <JobListContainer />
            </JobList>

            <JobInfo>
              <header>
                <div>
                  <h1>Emprego</h1>
                  <h2>Empresa</h2>
                  <p>Rio de Janeiro</p>
                </div>

                <Button>
                  <TiInputChecked size={24} color="white" />
                  Candidatar-se
                </Button>
              </header>

              <main>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Enim, voluptas temporibus iure ratione ipsa totam possimus
                  perferendis autem molestiae. Totam neque dolor eveniet, quam
                  velit provident, nemo laboriosam sunt quas optio assumenda
                  consectetur, earum atque reprehenderit quia obcaecati
                  consequuntur corrupti! <br />
                  <br />
                  Sequi molestiae dolores iusto ipsa illum obcaecati suscipit
                  veniam fuga ducimus commodi. In praesentium eos aliquam aut
                  reiciendis sequi corporis nisi fugiat placeat! Id blanditiis
                  accusantium ipsam deleniti, reprehenderit necessitatibus!
                  Porro numquam facere consequatur? Neque consectetur ipsum
                  dolor dolores consequuntur sequi excepturi, dolorum quibusdam
                  doloremque dignissimos! Quidem, porro repellat expedita iusto,
                  hic doloremque provident a corrupti eligendi quia autem
                  adipisci.
                </p>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis eveniet ratione earum cumque, mollitia, eaque autem
                  suscipit, sit quod possimus similique pariatur sunt totam
                  consectetur ut consequatur delectus? Aperiam, ea.
                </p>
                <li>Lorem, ipsum dolor sit amet</li>
                <li>Lorem, ipsum dolor sit amet</li>
                <li>Lorem, ipsum dolor sit amet</li>
                <li>Lorem, ipsum dolor sit amet</li>
              </main>

              <footer>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio quaerat dicta quasi illum, laudantium sint suscipit
                  saepe inventore consequatur molestias veniam at!
                </p>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  omnis minus impedit quae, provident ullam sapiente, vitae
                  ratione reiciendis non quibusdam culpa quia laboriosam animi
                  reprehenderit vero inventore dolores soluta! Quasi pariatur
                  aliquid nam, magnam libero adipisci cum eligendi expedita?
                  Delectus consequatur iusto id totam?
                </p>
              </footer>
            </JobInfo>
          </div>
        </Cards>
      </JobsBox>
    </>
  );
}
