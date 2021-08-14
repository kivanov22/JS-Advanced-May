

export async function request(url, method = 'Get', body, responseResult) {
    try {
        
        let headers = {};
        if (['post', 'put','patch'].includes(method.toLowerCase())) {
            headers['Content-Type'] = 'application/json';
        }

     

        const token = localStorage.getItem('authToken');

        if (token != null) {
            headers['X-Authorization'] = token;
        }

        let options = {
            headers,
            method
        };

        if (body !== undefined) {
            options.body = JSON.stringify(body);
        }

        let response = await fetch(url, options);
        if (response.ok==false) {
            let message = await response.text();
            throw new Error(`${response.status}: ${response.statusText}\n${message}`);
        }

        let result = undefined;
        if (!responseResult) {
            result = await response.json();
        }

        return result;
    } catch (err) {
        alert(err)
    }
}