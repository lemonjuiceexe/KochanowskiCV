const f = document.getElementById("one");
const fc = document.getElementById("in1");
const s = document.getElementById("two");
const sc = document.getElementById("in2");
const t = document.getElementById("three");
const tc = document.getElementById("in3");

document.addEventListener('scroll', () =>
{
    let fOffset = Math.abs(Offset(f));
    let sOffset = Math.abs(Offset(s));
    let tOffset = Math.abs(Offset(t));
    //console.log(fOffset);
    //console.log("webscroll " + window.scrollY)
    if(fOffset < sOffset && fOffset < tOffset)
    {
        f.style.backgroundColor = "yellow";
        fc.style.fontSize = "120%";
    }
    else
    {
        f.style.backgroundColor = "limegreen";
        fc.style.fontSize = "80%";
    }
    if(sOffset < fOffset && sOffset < tOffset)
    {
        s.style.backgroundColor = "yellow";
        sc.style.fontSize = "120%";
    }
    else
    {
        s.style.backgroundColor = "crimson";
        sc.style.fontSize = "80%";
    }
    if(tOffset < sOffset && tOffset < fOffset)
    {
        t.style.backgroundColor = "yellow";
        tc.style.fontSize = "120%";
    }
    else
    {
        t.style.backgroundColor = "dodgerblue";
        tc.style.fontSize = "80%";
    }
});

function Offset(e)
{
    let r = e.getBoundingClientRect();
    /*let top = r.top;
    let s = window.scrollY;
    return top + s;*/
    // let b = getComputedStyle(e);
    // let marginT = parseInt(b.marginTop);
    // let marginB = parseInt(b.marginBottom);
    console.log(r.height);
    return r.top - ((1/32) * r.height);
}