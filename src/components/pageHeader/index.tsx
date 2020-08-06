import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backImg from '../../assets/images/icons/back.svg'

interface PageHeaderProps {
    title: string

}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    return (
        <header className='page-header'>
            <div className='top-bar-container'>
                <Link to='/'>
                    <img src={backImg} alt='voltar' />
                </Link>
                <img src={logoImg} alt='Proffy' />
            </div>

            <div className='header-content'>
                <strong>
                    {title}
                </strong>
                {children}
            </div>

        </header>
    )
}

export default PageHeader