import React from 'react';

import './styles.css'
import whatsapp from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return (
        <article className='teacher-item'>
            <header>
                <img src='https://avatars0.githubusercontent.com/u/43214747?s=460&u=a267d113c5469b84bf87d202cdb7129330e4c865&v=4' alt='Daniel Soares' />
                <div>
                    <strong>Daniel Soares</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                asdfo ak e kafkasdf adfkeras fsdf
                        <br />
                        adfkla faksdf asdf
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsapp} alt='Whatsapp' />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
