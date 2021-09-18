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

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");

const defaultColor = "yellowgreen";

const smallFont = "80%";
const smallerBig = "90%";
const bigFont = "105%";

fc.style.fontSize = "100%";
b1.checked = true;

document.addEventListener('scroll', () =>
{
    const fOffset = Math.abs(Offset(f));
    const sOffset = Math.abs(Offset(s));
    const tOffset = Math.abs(Offset(t));
    const foOffset = Math.abs(Offset(fo));
    const fvOffset = Math.abs(Offset(fv));

    if(fOffset < sOffset && fOffset < tOffset && fOffset < foOffset && fOffset < fvOffset)
    {
        fc.style.fontSize = "100%";
        b1.checked = true;
    }
    else
    {
        fc.style.fontSize = smallFont;
        b1.checked = false;
    }
    if(sOffset < fOffset && sOffset < tOffset && sOffset < foOffset && sOffset < fvOffset)
    {
        sc.style.fontSize = bigFont;
        b2.checked = true;
    }
    else
    {
        sc.style.fontSize = smallFont;
        b2.checked = false;
    }
    if(tOffset < sOffset && tOffset < fOffset && tOffset < foOffset && tOffset < fvOffset)
    {
        tc.style.fontSize = smallerBig;
        tctt.style.fontSize = "130%";
        b3.checked = true;
    }
    else
    {
        tc.style.fontSize = smallFont;
        tctt.style.fontSize = "";
        b3.checked = false;
    }
    if(foOffset < sOffset && foOffset < tOffset && foOffset < fOffset && foOffset < fvOffset)
    {
        foc.style.fontSize = bigFont;
        b4.checked = true;
    }
    else
    {
        foc.style.fontSize = smallFont;
        b4.checked = false;
    }
    if(fvOffset < sOffset && fvOffset < tOffset && fvOffset < fOffset && fvOffset < foOffset)
    {
        fvc.style.fontSize = bigFont;
        b5.checked = true;

    }
    else
    {
        fvc.style.fontSize = smallFont;
        b5.checked = false;
    }

});

function Offset(e)
{
    const r = e.getBoundingClientRect();
    return r.top - (1/16 * r.height);
}

function Scroll(x)
{
    if(x == 1)
    {
        fc.scrollIntoView({behavior:"smooth"});
    }
    else if(x == 2)
    {
        sc.scrollIntoView({behavior:"smooth"});
    }
    else if(x == 3)
    {
        tc.scrollIntoView({behavior:"smooth"});
    }
    else if(x == 4)
    {
        foc.scrollIntoView({behavior:"smooth"});
    }
    else if(x == 5)
    {
        fvc.scrollIntoView({behavior:"smooth"});
    }
}