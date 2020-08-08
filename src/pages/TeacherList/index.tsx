import React from 'react';

import './styles.css'
import PageHeader from '../../components/pageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList () {
    return (
        <div id='page-teacher-list' className='container'>
            <PageHeader title='Estes são os proffys disponíveis'>
                <form id='search-teachers'>
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
                    <Input name='time' label='Hora' />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
