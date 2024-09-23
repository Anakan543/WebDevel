import React from "react";
import { Checkbox } from "./checkbox";
import { Modal } from "./Modal";
import { ItemShop } from "./itemShop";
import { CurrencyConverter } from "./currencyConverter";
export class BodyFiller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedItem: 0,
      exchangeRate: 41.34,
      userValue: 0,
      convertedValue: 0
    };
    this.ConvertedValue = this.ConvertedValue.bind(this);
  }
  
  CountItem = (isChecked) => {
    console.log(isChecked);
    this.setState(() => ({
      selectedItem: isChecked
        ? this.state.selectedItem + 1
        : this.state.selectedItem - 1,
    }));
  };
  
  ConvertedValue = (event) => {
    const inputValue = event.target.value;
    const converted = (inputValue / this.state.exchangeRate).toFixed(2);
    this.setState({
      userValue: inputValue,
      convertedValue: converted
    });}

  render() {
    return (
      <>
        <div className="container blockTest">
          <div className="selectedItems">
            Selected items{this.state.selectedItem}
          </div>
          <form className="form">
            <Checkbox children={"item1"} onChange={this.CountItem} />
            <Checkbox children={"item2"} onChange={this.CountItem} />
            <Checkbox children={"item3"} onChange={this.CountItem} />
            <Checkbox children={"item4"} onChange={this.CountItem} />
          </form>
          <div className="itemShops">
            <h1>Телескопы SKY-WATCHER</h1>
            <ItemShop
              nameItem={"Телескоп Sky-Watcher DOB8 Pyrex"}
              price={"30,786"}
              srcPicture={"./picturesTelescope/pictures1.jpg"}
              description={
                "Телескоп Sky-Watcher DOB8 Pyrex — це популярний інструмент для любителів астрономії, що поєднує якість, портативність і зручність.Завдяки 203-мм параболічному дзеркалу, він забезпечує достатньо світла для детального спостереження за Місяцем, планетами, туманностями, зоряними скупченнями та галактиками. Конструкція монтировки з запатентованими підшипниками дозволяє плавно відстежувати об'єкти навіть на великому збільшенні. DOB8 підходить як для новачків, так і для досвідчених астрономів. Його легкість в установці та використанні разом із серйозними оптичними можливостями робить його ідеальним вибором. Телескоп комплектується двома окулярами, які дозволяють отримати збільшення 48x і 120x. Для розширення діапазону збільшень рекомендується додатково придбати лінзу Барлоу або короткофокусний окуляр, а також ширококутний окуляр на малих збільшеннях."
              }
            ></ItemShop>
            <ItemShop
              nameItem={"Телескоп Sky-Watcher 767AZ1"}
              price={"7,560"}
              srcPicture={"./picturesTelescope/pictures2.jpg"}
              description={
                "Універсальний дзеркальний телескоп для початківців з діаметром головного дзеркала 76 мм, який збирає на 18% більше світла, ніж модель із діаметром 70 мм. Забезпечує високу чіткість для спостереження за Місяцем, планетами та зоряними скупченнями. Має легку та міцну конструкцію, зручний у використанні та транспортуванні.Оптимальний вибір для новачків в астрономії. У комплекті азимутальна монтировка AZ-1 на алюмінієвому штативі з можливістю мікрометричного наведення. Телескоп оснащений двома окулярами та лінзою Барлоу для збільшень 28х, 56х, 70х і 140х."
              }
            ></ItemShop>
            <ItemShop
              nameItem={"Телескоп Sky-Watcher 909AZ3"}
              price={"15,330"}
              srcPicture={"./picturesTelescope/pictures3.jpg"}
              description={
                "Модель Sky-Watcher 909AZ3 популярна серед початківців та досвідчених астрономів завдяки поєднанню потужності, універсальності, легкості та доступної ціни. Азимутальна монтировка AZ3 забезпечує зручне спостереження як за об'єктами Сонячної системи, так і за наземними об'єктами. Апертура 90 мм дозволяє спостерігати яскраві об'єкти глибокого космосу.Телескоп укомплектований двома окулярами (25 мм і 10 мм) для збільшень 36х та 90х. Для розширення можливостей рекомендується додатково придбати окуляри на 40 мм для малого збільшення і на 6 мм для великого. Також для високих збільшень варто замінити діагональну призму на дзеркало. У комплекті йде оптичний шукач з 30 мм ахроматичним об'єктивом, 6-кратним збільшенням і прицільною сіткою, що полегшує наведення на об'єкти."
              }
            ></ItemShop>
          </div>
          <div className="currencyConverter">
            <form>
              <h2>Конвертер валют</h2>
              <label htmlFor="uahInput">UAH</label>
              <input type="text" name="uahInput" onChange={this.ConvertedValue} value={this.state.userValue}/>
              <label htmlFor="dollarInput">USD</label>
              <CurrencyConverter valueConverted = {this.state.convertedValue}/>
            </form>
          </div>
        </div>
      </>
    );
  }
}
