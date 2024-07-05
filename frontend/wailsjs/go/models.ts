export namespace main {
	
	export class SubmitParams {
	    target: string;
	    username: string;
	    password: string;
	    key: string;
	    log_level: string;
	
	    static createFrom(source: any = {}) {
	        return new SubmitParams(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.target = source["target"];
	        this.username = source["username"];
	        this.password = source["password"];
	        this.key = source["key"];
	        this.log_level = source["log_level"];
	    }
	}

}

