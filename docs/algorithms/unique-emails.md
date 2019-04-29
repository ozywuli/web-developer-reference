---
title: 'Find unique emails'
date: 03-18-2019
---

```js
    let uniqs = [];

    for (let i = 0; i < emails.length; i++) {
			let strArr = emails[i].split('');
      let iat = emails[i].indexOf('@');

      let n_str = strArr.filter((letter, index) => {
        return !(letter === '.' && index < iat);
      })

      iat = n_str.indexOf('@');
      let iplus = n_str.indexOf('+');

      n_str.splice(iplus, iat - iplus);

			n_str = n_str.join('');

			uniqs.push(n_str);
    }

    uniqs = new Set(uniqs);
    return uniqs.size;
```

Solution 2

<iframe width="100%" height="300" src="//jsfiddle.net/ozywuli/u0nr24kq/55/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
