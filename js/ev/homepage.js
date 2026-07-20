import {setPageTitle} from "../components/core/page.js";
import {print} from "../components/core/utils.js";
import {myName} from "../components/variables.js";
import main from "../components/core/layout.js";

export function homePage() {
    setPageTitle('Playground');

    //play inside this
    //

    //basics
    {
        print('Items (' + (1+1) + '): $' + (20.95+7.99)*100/100)  ;

        const chameli = `
    <h3>Survey Details</h3>
    <p>My name is Chameli</p>
`;
        print(chameli);

        print(`Items (${1+1}): $${(20.95+7.99)*100/100}`);

        print(myName);

        const number = 5.00;
        print(5 === number);

        print(`
        <div class="driver">
            <input type='text' placeholder="Type a number" maxlength="2" size="15" max="90" id="ageInput">
            <button id="ageSubmit">Send</button>
            <p id="driverResult"></p>
        </div>
    `);

        (() => {
            const driver = document.querySelector('.driver');

            const ageInput = driver.querySelector('#ageInput');
            const ageSubmit = driver.querySelector('#ageSubmit');
            const driverResult = driver.querySelector('#driverResult');

            ageSubmit.addEventListener('click', () => {
                const age = ageInput.value;
                let message;

                if (isNaN(age) || age === '') {
                    return;
                }
                if (age < 18) {
                    let waitingTime = 18 - age;
                    message = `You have to wait ${waitingTime} years to drive`;
                } else if (age >=80) {
                    message = 'Drive! Be careful...!'
                } else {
                    message = 'You can drive safely..!';
                }
                driverResult.innerHTML = message;
            });
        })();


        const cond = 'undefined';
        const result = cond ? 'truthy' : 'falsy';
        print(result);

        const message = 4 && 'This is from Guard operator';
        print(message);

        const currency = 'EUR' || 'USD';
        print(currency);

        const product = {
            name: 'premium socks',
            price: 1090,
            'delivery-time': '1 day',
            rating: {
                stars: 4.5,
                count: 87
            },
            printName: function () {
                console.log(`The product is ${this.name}`);
            }
        };
        product.name = 'premium cotton socks';

        print(`<hr/>`);
        print(typeof product);

        const arr = Array.from({length: 5}, (_, i) => i + 1);
        //console.log(arr);

        const productData = JSON.stringify(product);
        //console.log(JSON.parse(productData));
    }

    print('', main, {mode: "replace"});


    //reset the main component
    print('', main, {mode: "replace"});

    //--- Arrays

    {
        const myArr = [10, 20, 30, 40, 50];

        const doubledArr = [];
        let doubledTxt = '';

        myArr.forEach(val => {
            doubledArr.push(val * 2);
        })
        print(doubledArr);

        const doubleArr2 = myArr.map(val => {
            doubledTxt += val * 3 + '<br>';
            return val * 2;
        });
        print(doubleArr2);

        print(doubledTxt);

        print(typeof doubledArr);
        print(typeof doubledTxt);

        print(Array.isArray(doubledTxt));
        print(Array.isArray(doubleArr2));


        doubledArr.splice(0, 1);
        print(doubledArr);
        print(doubledArr.length);
    }

    //reset the main component
    print('', main, {mode: "replace"});

    // loops
    {
        const fruits = ['mango', 'pineapple', 'banana', 'orange', 'blueberry'];


        // while loop
        let randomNumber = 0;

        while (randomNumber < 0.35) {
            randomNumber = Math.random();
            print(randomNumber);
        }


        //for loop
        for (let i = 0; i <= 5; i++) {
            print(i);
        }


        print(`<p><p>Looping through arrays</p><hr/><p></p>`);

        //looping through an array
        const tdList = [
            'Washing clothes', 'Learning JavaScript', 'Market for fresh milk and eggs', 'Take Rosie from her class', 'Finish Amber project', 'Watch EastEnders'
        ];


        /*
        TODO: reduce ---
         */


        let tdListHolder = document.getElementById('tdListHolder');

        if (!tdListHolder) {
            tdListHolder = document.createElement('div');
            tdListHolder.id = 'tdListHolder';

            document.getElementById('main').appendChild(tdListHolder);
        }

        tdListHolder.innerHTML = '';

        const tdListItems = document.createElement('ul');

        tdList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            tdListItems.appendChild(li);
        });

        tdListHolder.appendChild(tdListItems);


        /*
        for (let i = 0; i < tdList.length; i++) {
            console.log(tdList[i]);
        }
         */
    }

    /*
    ---------
    functions
     */

    //reset the main component
    print('', main, {mode: "replace"});

    {
        function greeting() {
            console.log('Hello World');
        }

        const function1 = greeting;

        console.log(function1);
        console.log(typeof function1);
        function1();

        const obj1 = {
            num: 3,
            fun: function () {
                console.log('Hello from Object');
            }
        }

        obj1.fun();

        (function display() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            console.log(`Window width: ${width} and height: ${height}`);
        })();


        //timers

        /*
        {
            setTimeout(function() {
                console.log('timeout')
            }, 3000);

            console.log('Next line');

            console.log(1);
            console.log(2);

            setTimeout(function () {
                console.log(3);
            }, 0);

            console.log(4);
            console.log(5);
            console.log(6);

            setTimeout(() => {
                console.log(7)
            }, 3000);

            setTimeout(() => {
                console.log(8)
            }, 1500);

            console.log(9);
            console.log(10);
        }*/


        /*{
            let time = 7;

            const gameTimer = setInterval(() => {
                time--;

                console.log(time);

                if (time === 0) {
                    clearInterval(gameTimer);
                    console.log('Game Over');
                }

            }, 1000);
        }*/


        const fruits = ['Apple', 'Banana', 'Pineapple', 'Mango', 'Strawberry'];
        let fruitList = '<ul>';

        for (const fruit of fruits) {
            fruitList += `<li>${fruit}</li>`;
        }
        fruitList += '</ul>';
        print(fruitList);

    }

    {
        // Advanced functions 2

        const arF = v => print(v * 6.5);
        arF(6);

        const oneLF = v => v * 3;

        print(oneLF(7));

        const person = {
            firstName: 'John',
            lastName: 'Smith',
            age: 50,

            fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        print(person.fullName());

        print(`<button id='testBtn1' class="btn btn-outline-primary">Click this</button>`);

        const testBtn1 = document.getElementById('testBtn1');

        testBtn1.addEventListener('click', (e) => {
            if (e.target.matches('.btn')) {
                alert('This is Bootstrap button');
            }
        });


        print(`
            <div class="t-form-btn-set my-4">
                <button class="btn btn-outline-dark t-form-action-btn" data-action="save">Save</button>
                <button class="btn btn-outline-danger t-form-action-btn" data-action="delete">Delete</button>
                <button class="btn btn-outline-dark t-form-action-btn" data-action="reset">Reset</button>
                <button class="no-btn btn-outline-dark t-form-action-btn">Default Button</button>
            </div>
        `);

        const tForm = document.querySelector('.t-form-btn-set');

        tForm.addEventListener('click', (e) => {
           if (!e.target.matches('.btn')) return;

           switch (e.target.dataset.action) {
               case 'save':
                   alert('This is Save button');
                   break;
               case 'delete':
                   alert('This is Delete button');
                   break;
               case 'reset':
                   alert('This is Reset Button');
                   break;
               default:
           }
        });


        print(`
            <div class="test-form-field">
                <input type="password" size="25" id="testPwField" class="test-pw-field form-control" placeholder="Type your password"/>
            </div>
        `);

        const testPwField = document.querySelector('.test-pw-field');

        testPwField.addEventListener('keydown', (e) => {
            const capsOn = e.getModifierState('CapsLock');

            let capsWarning = document.getElementById('capsWarning');

            if (capsOn) {

                if (!capsWarning) {
                    capsWarning = document.createElement('p');
                    capsWarning.id = 'capsWarning';
                    capsWarning.textContent = '⚠️ Caps Lock is ON';

                    testPwField.parentElement.appendChild(capsWarning);
                }

            } else {

                if (capsWarning) {
                    capsWarning.remove();
                }
            }

            console.log(e);
        });

    }

    {

        //Array methods

        const num = [5, 7, -13, 30, -46, 67];

        const posFilter = num.filter(val => val > 0);

        console.log(posFilter);

        const posMap = num.map(val => val + 13.5);

        console.log(posMap);
    }

}