let languages = [
    "python", "c", "java", "c++", "c#", "visual basic", "javascript",
    "sql", "php", "go", "assembly", "matlab", "delphi", "scratch", "r", "fortran", 
    "ruby", "rust", "swift", "sas", "foxpro",
    "cobol", "perl", "f#", "objective-c", "transact-sql",
    "ada", "lisp", "lua", "haskell", "pl/sql",
    "julia", "groovy", "kotlin", "dart", "cfml",
    "scala", "prolog", "rpg", "openedge abl", "bash",
    "abap", "logo", "awk", "typescript", "emacs lisp",
    "d", "powershell", "postscript", "coffeescript", "erlang", "elixir"
];

let entered = [];

document.querySelector("span.to").innerText = languages.length;

let input = document.querySelector("input");
let tbody = document.querySelector('tbody');

input.oninput = function() {
  if(languages.includes(input.value) && !entered.includes(input.value)) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');

    entered.push(languages[languages.indexOf(input.value)]);
    td.innerText = languages[languages.indexOf(input.value)];

    tr.appendChild(td);
    tbody.appendChild(tr);

    document.querySelector("span.from").innerText = entered.length;
  }
}

