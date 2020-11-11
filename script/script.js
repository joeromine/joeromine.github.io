var uf = document.getElementById('uf');
    uf.innerHTML = months('11/1/2019');

var hounds = document.getElementById('hounds');
hounds.innerHTML = years('06/1/2011');

var gpa = document.getElementById('gpa');
gpa.innerHTML = years('06/1/2015');



function months(start) {
    let date1  = new Date(start);
    let date2 = new Date();
    
    let years = (date2.getFullYear()- date1.getFullYear()) * 12;
    let m1 = date1.getMonth() + 1;
    let m2 = date2.getMonth() + 1;
    
return ((m1 - m2) + years);    
}

function years(start) {
    let date1  = new Date(start);
    let date2 = new Date();
    
    return (date2.getFullYear()- date1.getFullYear());

}