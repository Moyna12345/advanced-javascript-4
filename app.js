var subjectObject = {
    "Front-End": {
        "HTML": ["Tags", "Links", "Images", "Tables", "Lists", "colors", "Attributes", "Classes", "input", "Iframes", "Div/Span", "Metatags", "Headings", "Favions"],
        "CSS": ["padding", "Margins", "Borders", "Display", 'Icons', "Units", 'z-index','Pseudo-class', "Pseudo-elenent", "!important", "Text-Effect", "Mart-Function",
                 "Transitions", "Aminations", "Transform", "Variables", "Flexbox", 'Grid', 'Masking', 'Media','Query'],
        "Bootstrap5": ['Accordion', 'Tooltips', 'Toasts', 'Navs & tabs', 'Carousel', 'Collapse', 'Alerts', 'Badge',
                      'Card', 'List group', 'Navar', 'Pagination', 'progress', 'Scrollspy', 'Spinners', ],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions", "Loops", "Array", "object", "DOM", "Local-Storage", "API", "ES6"],
        "React.JS": ['Components', 'JSX', 'State', 'props', 'Lists & keys', 'Styling', 'Life Cycle', 'Method', 'Hooks', 'Form Handling', 'Data Handling', 'Custom Hooks', 'Contet', 'portals',
                     'Routing', 'State Management', 'patterns', 'Anti-patterns']
    },
    "Back-end": {
        "Expres.js": ['Routing and HTTP Methods','Middleware', 'Cookies', 'REST APIS', 'Scaffolding', 'Database Connectivity', 'Templating'],
        "Node.js": ['REPL', 'package manager', 'callbacks', 'event loop', 'os', 'path', 'query', 'string', 'cryptography', 'debugger', 'URL', 'DNS', 'Net', 'UDP', 'process', 'child',
                    'processes', 'buffers', 'streams', 'file systems', 'global objects', 'web modules'],
    },
    "Database":{
        "MongoDB" : ['Documents', 'Collections', 'Compass', 'Replica Sets', 'Sharding', 'Indexes', 'Aggregation', 'MongoDB Cloud'],
        "MySQL": ['Create TABLE', 'Insert Data Into Table', 'Select Query', 'Table Constraints', 'And oR and NOT Operator',
    'IN Operaton', 'LIKE operator', 'MySQL Aggregate Functions'],
    },
    "Hybrid/Cross-Platform": {
    "Electron JS": ['Main and Renderer Process', 'Browser Window', 'Quote Widget', 'IPC','Application Menu', 'Context Menu', 'Accelerators', 'Shell Module',
                   'Tray Module', 'CRUD File'],
    "React-Native": ['React Native CLI', 'Ejecting Expo', 'State Hook', 'Styles & Style Sheet', 'List, ScrollView & RefreshControl', 'Alert & Toast Message'],
    "NativeScript": []
  }
}

window.onload = function(){
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')

    for(var x in subjectObject){
        // console.log(x);
        first.options[first.options.length] = new Option(x)
    }

    first.onchange = function(){
        second.length = 1
        third.length = 1

        second.style.display = 'block'
        third.style.display = 'none'

        for(var y in subjectObject[this.value]){
            // consoLe.Log(y);
            second.options[second.options.length] = new Option(y)
        }
    }

    second.onchange = function(){
        third.length = 1

        third.style.display = 'block'

        z = subjectObject[first.value][this.value]
        console.log(z);
        for(let i=0; i<z.length; i++){
            third.options[third.options.length] = new Option(z[i])
        }
    }
}