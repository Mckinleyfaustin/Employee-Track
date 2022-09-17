// inside this file, you're going to work with the information in your Employee array
// The idea here is to ultimately return back an HTML template with the innformation
// stored in your array.
// It's very likely you're goin to need to iterate through your array.
// In each iteration, you will check to see if the object is an intern, an engineer, or a manager
// Depending on what it is, you will take the object and insert its information into a small
// card or template of HTML. You will be 'interpolating' or embedding this information in the template
// by way of this syntax, ${object.property}. Your HTML card/template is going to be a string literal
// which uses backticks i.e. ` some raw HTML ${object.pooperty} `

var htmlString = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Raw's Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/2b42e9692f.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Raw Production Team</h1>
            </div>
        </div>
    </div>
`

function generateManagerHtml(manager) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-clipboard"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"></li>
            <li class="list-group-item">Email: <a
                    href="mailto:mckinley.faustin@rawpro.com">mckinley.faustin@rawpro.com</a></li>
            <li class="list-group-item">Office number: 23</li>
        </ul>
    </div>
</div>
    `
}

function generateEngineerHtml(engineer) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-clipboard"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"></li>
            <li class="list-group-item">Email: <a
                    href="mailto:mckinley.faustin@rawpro.com">mckinley.faustin@rawpro.com</a></li>
            <li class="list-group-item">Office number: 23</li>
        </ul>
    </div>
</div>
    `
}

function generateInternHtml(intern) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-clipboard"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"></li>
            <li class="list-group-item">Email: <a
                    href="mailto:mckinley.faustin@rawpro.com">mckinley.faustin@rawpro.com</a></li>
            <li class="list-group-item">Office number: 23</li>
        </ul>
    </div>
</div>
    `
}

function generateTheHTML(employeeArray) {
    // iterate through your array, checking what the object is
    employeeArray.forEach( employee => {
        if(employee.role === 'manager'){
            var returnedHTML = generateManagerHtml(employee);
            htmlString += returnedHTML;
        } else if (employee.role === 'engineer') {
            var returnedHTML = generateEngineerHtml(employee);
            htmlString += returnedHTML; // htmlString = htmlString + returnedHTML
        } else {
            var returnedHTML = generateInternHtml(intern)
            htmlString += returnedHTML;
        }

    })
    
};

module.export = generateTheHTML;