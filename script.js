const f = document.getElementById("one");
const fc = document.getElementById("in1");
const s = document.getElementById("two");
const sc = document.getElementById("in2");
const t = document.getElementById("three");
const tc = document.getElementById("in3");
const tctt = document.getElementById("tt3");
const fo = document.getElementById("four");
const foc = document.getElementById("in4");
const fv = document.getElementById("five");
const fvc = document.getElementById("in5");

const defaultColor = "yellowgreen";

const smallFont = "80%";
const smallerBig = "90%";
const bigFont = "105%";

document.addEventListener('scroll', () =>
{
    const fOffset = Math.abs(Offset(f));
    const sOffset = Math.abs(Offset(s));
    const tOffset = Math.abs(Offset(t));
    const foOffset = Math.abs(Offset(fo));
    const fvOffset = Math.abs(Offset(fv));

    if(fOffset < sOffset && fOffset < tOffset && fOffset < foOffset && fOffset < fvOffset)
    {
        //f.style.backgroundColor = "yellow";
        fc.style.fontSize = bigFont;
    }
    else
    {
        //f.style.backgroundColor = "defaultColor";
        fc.style.fontSize = smallFont;
    }
    if(sOffset < fOffset && sOffset < tOffset && sOffset < foOffset && sOffset < fvOffset)
    {
        //s.style.backgroundColor = "yellow";
        sc.style.fontSize = bigFont;
    }
    else
    {
        //s.style.backgroundColor = "defaultColor";
        sc.style.fontSize = smallFont;
    }
    if(tOffset < sOffset && tOffset < fOffset && tOffset < foOffset && tOffset < fvOffset)
    {
        //t.style.backgroundColor = "yellow";
        tc.style.fontSize = smallerBig;
        tctt.style.fontSize = "130%";
    }
    else
    {
        //t.style.backgroundColor = "defaultColor";
        tc.style.fontSize = smallFont;
        tctt.style.fontSize = "";
    }
    if(foOffset < sOffset && foOffset < tOffset && foOffset < fOffset && foOffset < fvOffset)
    {
        foc.style.fontSize = bigFont;
    }
    else
    {
        foc.style.fontSize = smallFont;
    }
    if(fvOffset < sOffset && fvOffset < tOffset && fvOffset < fOffset && fvOffset < foOffset)
    {
        fvc.style.fontSize = bigFont;
    }
    else
    {
        fvc.style.fontSize = smallFont;
    }

});

function Offset(e)
{
    const r = e.getBoundingClientRect();
    return r.top - ((1/32) * r.height);
}