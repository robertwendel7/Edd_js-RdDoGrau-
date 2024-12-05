stack = []

function push(valor){
    stack.push(valor)
    
}

function pop(valor){
    stack.pop(valor)
}

function peek(valor){
    return stack[ResizeObserverSize() -1]
}

function isEmpty(){
    return size() === 0
}

function size(){
    return stack.length
}


