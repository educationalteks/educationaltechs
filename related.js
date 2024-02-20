<!DOCTYPE html>
<HTML dir='ltr' lang='en-US'>

<head>
    <meta content='width=device-width,minimum-scale=1,initial-scale=1' name='viewport'/>
    <meta charset='utf-8' />
    <title>Related Post</title>
    <style>
        body {
            margin: 0;
            font-family: "FiraSans", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
            color:#444;     overflow: hidden;
    height: auto;
        }
        @media screen and (max-width:640px){
            body {height:360px}
        }
        
        body ul {
            padding: 0;
            margin: 0;
            float: left
        }
        
body li {
    position: relative;
    padding: 5px 0 5px;
    margin: 0 10px 0 0;
    border-bottom: 1px solid #d7d7d7;
    height: 110px;
    float: left;
    width: calc(50% - 10px);
    list-style: none;
}
        
        @media screen and (max-width: 480px){
body li {
    padding: 0 0 0px 0;
    height: auto;
            }}
@media screen and (max-width: 640px){
body li {
    width: 100%;
    height: auto;
        margin: 0 0 10px 0;
    padding: 0 0 5px 0;
    }}
        
        span.news-text {
            font-size: 14px;
            color: #444;
            line-height: 1.2em;
                display:none;
        }
        
        body ul li a {
    display: block;
    color: #15c;
    transition: all .2s ease;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.3em;
        }
        
        body ul li a:hover {
            text-decoration: none
        }
        
        body ul li:hover a.relinkjdulx {
            color: #EA4335
        }
        
body ul li img {
    padding-left: 10px;
    padding-top: 10px;
    float: left;
    margin-right: 10px;
    padding: 0;
    margin-left: 10px;
    border-radius: 3px;
    width: 100px;
}
        
        .relinkjdulx {
    font-size: 17px;
    margin-bottom: 5px;
    padding-top: 10px;
        }
        
        @media only screen and (max-width:480px) {
            span.news-text {
                display: none
            }
            .relinkjdulx {
    font-size: 14px;
    margin-bottom: 5px;
    padding-top: 20px;
}
        }
        
        .copy{font-size:9px;color:#444;float:right;padding:5px}
    </style>
</head>

<body>
    <ul>
        <script>
            function getQueryVariable(r) {
                for (var l = window.location.search.substring(1).split("&"), e = 0; e < l.length; e++) {
                    var t = l[e].split("=");
                    if (t[0] == r) return t[1]
                }
                return !1
            }
            function saringtags(r, l) {
                for (var e = r.split("<"), t = 0; t < e.length; t++) - 1 != e[t].indexOf(">") && (e[t] = e[t].substring(e[t].indexOf(">") + 1, e[t].length));
                return e = e.join(""), e = e.substring(0, l - 1)
            }
            var simg = getQueryVariable("si"),
                rsimg = (simg == false) ? "/s72-c/" : "/" + simg + "/";
            function relpostimgcuplik(r) {
                for (var l = 0; l < r.feed.entry.length; l++) {
                    var e = r.feed.entry[l];
                    reljudul[relnojudul] = e.title.$t, postcontent = "", "content" in e ? postcontent = e.content.$t : "summary" in e && (postcontent = e.summary.$t), relcuplikan[relnojudul] = saringtags(postcontent, numchars), postimg = "media$thumbnail" in e ? e.media$thumbnail.url.replace(/.*?:\/\//g, "//").replace(/\/s[0-9]+(\-c)?\//, rsimg) : "https://1.bp.blogspot.com/-LGEolwXn4BM/WS9-g9OMA_I/AAAAAAAAAU4/LWkMJrn8RI8m56N1U-10ZuLdAuFFJqTxQCLcB/s72/No%2BImage.png", relgambar[relnojudul] = postimg;
                    for (var t = 0; t < e.link.length; t++)
                        if ("alternate" == e.link[t].rel) {
                            relurls[relnojudul] = e.link[t].href;
                            break
                        }
                    relnojudul++
                }
            }
            function contains(r, l) {
                for (var e = 0; e < r.length; e++)
                    if (r[e] == l) return !0;
                return !1
            }
            function artikelterkait() {
                for (var r = new Array(0), l = new Array(0), e = new Array(0), t = new Array(0), a = 0; a < relurls.length; a++) contains(r, relurls[a]) || (r.length += 1, r[r.length - 1] = relurls[a], l.length += 1, l[l.length - 1] = reljudul[a], e.length += 1, e[e.length - 1] = relcuplikan[a], t.length += 1, t[t.length - 1] = relgambar[a]);
                for (reljudul = l, relurls = r, relcuplikan = e, relgambar = t, a = 0; a < reljudul.length; a++) {
                    var n = Math.floor((reljudul.length - 1) * Math.random()),
                        u = reljudul[a],
                        i = relurls[a],
                        s = relcuplikan[a],
                        o = relgambar[a];
                    reljudul[a] = reljudul[n], relurls[a] = relurls[n], relcuplikan[a] = relcuplikan[n], relgambar[a] = relgambar[n], reljudul[n] = u, relurls[n] = i, relcuplikan[n] = s, relgambar[n] = o
                }
                for (var g, c = 0, p = Math.floor((reljudul.length - 1) * Math.random()), m = p, d = getQueryVariable("pos"); c < relmaxtampil && (relurls[p] == d || (g = "<li class='news-title clearfix'>", g += "<a href='" + relurls[p] + "' rel='nofollow' target='_blank' title='" + reljudul[p] + "'><img src='" + relgambar[p] + "' /></a>", g += "<a class='relinkjdulx' href='" + relurls[p] + "' target='_blank'>" + reljudul[p] + "</a>", g += "<span class='news-text'>" + relcuplikan[p] + " ... </span>", g += "</li>", document.write(g), ++c != relmaxtampil)) && (p < reljudul.length - 1 ? p++ : p = 0, p != m););
            }
            for (var labels = getQueryVariable("labels"), relmaxtampil = getQueryVariable("num"), url = getQueryVariable("url"), res = labels.split(","), i = 0, text = ""; res[i];) text += '<script src="' + url + "/feeds/posts/default/-/" + res[i] + '?alt=json&amp;callback=relpostimgcuplik&amp;max-results=50"><\/script>', i++;
            var relnojudul = 0,
                numchars = 120,
                reljudul = new Array,
                relurls = new Array,
                relcuplikan = new Array,
                relgambar = new Array;
            document.write(text + '<script>artikelterkait();<\/script>');
        </script>
    </ul>
</body>

</HTML>
