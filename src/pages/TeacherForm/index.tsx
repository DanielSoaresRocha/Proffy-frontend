import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/pageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm () {
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    const history = useHistory()

    function addNewSheduleItem () {
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0, from: '', to: '', }
        ])
    }

    function setScheduleItemValue (position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItens.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem
        })

        setScheduleItens(updateScheduleItems)
    }

    function handleCreateClass (e: FormEvent) {
        e.preventDefault()

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItens
        }).then(() => {
            alert('cadastro finalizado')
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro')
        })
    }

    return (
        <div id='page-teacher-form' className='container'>
            <PageHeader
                title='Que incrível que você quer dar aulas.'
                description='O primeiro passo é preencher este formulário de inscrição'
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name='name'
                            label='Nome completo'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            name='avatar'
                            label='Avatar'
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        <Input
                            name='whatsapp'
                            label='WhatsApp'
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                        <Textarea
                            name='bio'
                            label='Biografia'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name='subject'
                            label='Matéria'
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
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
                        <Input
                            name='cost'
                            label='Custo da sua matéria'
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                        <button type='button' onClick={addNewSheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItens.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className='schedule-item'>
                                    <Select
                                        name='week_day'
                                        label='Dia da semana'
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domino' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sábado' },
                                        ]}
                                    />

                                    <Input
                                        name='from'
                                        label='Das'
                                        type='time'
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name='to'
                                        label='Até'
                                        type='time'
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
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
                        <button type='submit'>
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
