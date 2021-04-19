import React from 'react'
import "./SubNav.css"

function SubNav() {
    return (
        <div>
            <div className="article_table_content">
                        <ul className="article_table">
                            <li id="table_list1"><a href="#"> Все направления</a></li>
                            <li><a href="#">HR и рекрутинг</a></li>
                            <li><a href="#">Маркетинг и PR</a></li>
                            <li><a href="#">Финансы</a></li>
                            <li><a href="#">Бизнес и управление</a></li>
                            <li id="last_nav"><a href="#">Программы</a></li>
                        </ul>    
                    </div>
        </div>
    )
}

export default SubNav
