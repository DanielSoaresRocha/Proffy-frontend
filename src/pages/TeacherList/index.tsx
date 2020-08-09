import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/pageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

function TeacherList () {
    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])

    function searchTeachers (e: FormEvent) {
        e.preventDefault()

        api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(response => {
            setTeachers(response.data)
        })
    }

    return (
        <div id='page-teacher-list' className='container'>
            <PageHeader title='Estes são os proffys disponíveis'>
                <form id='search-teachers' onSubmit={searchTeachers}>
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
                    <Select
                        name='week_day'
                        label='Dia da semana'
                        value={week_day}
                        onChange={e => setWeek_day(e.target.value)}
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
                        name='time'
                        label='Hora'
                        type='time'
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type='submit'>
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;
