/* Основные стили */
* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    padding: 10px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
}

#main_container {
    background-color: #baffc2;
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    max-width: 400px;
}

.flex_container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.input_row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}

/* Стили для полей ввода */
.textInput {
    flex: 1;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 18px;
}

.textInput:focus {
    outline: none;
    border-color: #4CAF50;
}

/* Стили для выбора операции */
.selectInput {
    width: 60px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
}

.selectInput:focus {
    outline: none;
    border-color: #4CAF50;
}

/* Стили для кнопки */
.button {
    width: 100%;
    height: 50px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #45a049;
}

.button:active {
    background-color: #3e8e41;
}

/* Стили для истории вычислений */
.history {
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    background-color: white;
    color: #d88f6c;
    resize: none;
    line-height: 1.5;
}

.history:focus {
    outline: none;
}

/* Стили для поля результата */
.result {
    width: 100%;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color: white;
    color: red;
    resize: none;
    text-align: right;
    font-weight: bold;
}

.result:focus {
    outline: none;
}

/* Мобильная адаптация */
@media (max-width: 480px) {
    .textInput, .selectInput, .button {
        height: 45px;
        font-size: 16px;
    }
    
    .history {
        height: 120px;
        font-size: 15px;
    }
    
    .result {
        height: 55px;
        font-size: 18px;
    }
    
    #main_container {
        padding: 10px;
    }
}

/* Анимации для кнопки */
@keyframes buttonClick {
    0% { transform: scale(1); }
    50% { transform: scale(0.98); }
    100% { transform: scale(1); }
}

.button-click {
    animation: buttonClick 0.2s;
}
