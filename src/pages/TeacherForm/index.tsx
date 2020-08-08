import React, { useState } from 'react';

import PageHeader from '../../components/pageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm () {
    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewSheduleItem () {
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0, from: '', to: '', }
        ])
    }

    return (
        <div id='page-teacher-form' className='container'>
            <PageHeader
                title='Que incrível que você quer dar aulas.'
                description='O primeiro passo é preencher este formulário de inscrição'
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name='name' label='Nome completo' />
                    <Input name='avatar' label='Avatar' />
                    <Input name='whatsapp' label='WhatsApp' />
                    <Textarea name='bio' label='Biografia' />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name='subject'
                        label='Matéria'
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Educação física', label: 'Educação física' }
                        ]}
                    />
                    <Input name='cost' label='Custo da sua matéria' />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type='button' onClick={addNewSheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItens.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className='schedule-item'>
                                <Select
                                    name='week_day'
                                    label='Dia da semana'
                                    options={[
                                        { value: '0', label: 'Domino' },
                                        { value: '1', label: 'Segunda-Feira' },
                                        { value: '2', label: 'Terça-Feira' },
                                        { value: '3', label: 'Quarta-Feira' },
                                        { value: '4', label: 'Quinta-Feira' },
                                        { value: '5', label: 'Sábado' },
                                    ]}
                                />

                                <Input name='from' label='Das' type='time' />
                                <Input name='to' label='Até' type='time' />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt='Aviso importante' />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;
