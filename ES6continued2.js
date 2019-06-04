/*-----------Exercise 1 (iterator version)-----------*/

let getCountdownIterator = {
    [Symbol.iterator](){
        let i = 10;
        return {
            next() {
                if (i > 1){
                    --i;
                    return {done: false, value: i};
                } else {
                    return {done: true, value: i};
                }
            }
        }
    }
}

/*-----------Exercise 1 (generator version)-----------*/

let getCountdownGenerator = function *() {
    let i = 10;
    while(i > 1){
        yield --i;
    };
};

/*-----------Exercise 2-----------*/

let todoList = {
    todoItems: [],
    addItem( description ) {
        this.todoItems.push( { description, done: false } );
        return this;
    },
    crossOutItem( index ) {
        if ( index < this.todoItems.length ) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};
 
console.log(todoList.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 ));
 
let iterableTodoList = {
    [Symbol.iterator](){
        let todoItems = [];
        add
    }
};
 
// for ( let item of iterableTodoList ) {
//     console.log( item );
// }



document.getElementById('homework-3').addEventListener("click", homework3);
function homework3(){
    console.log("/===========Exercise 1 (iterator version)===========/");
    console.log( [...getCountdownIterator] );
    console.log("/===========Exercise 1 (generator version)===========/");
    console.log( [...getCountdownGenerator()] );
}

/*--- Written Answers to Exercise 2
    console.log( it.next() ); //1
    console.log( it.next() ); //'Error yielding the next result' 2
    console.log( [...errorDemo()] ) //[1, 2]
    for ( let element of errorDemo() ) {
        console.log( element );s
    } //1, 'Error yielding the next result', 2
--*/
