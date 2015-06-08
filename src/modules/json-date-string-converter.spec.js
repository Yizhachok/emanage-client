'use strict';

describe('jsonDateStringConverter',function(){
	it('return object with parsed date strings as Date objects',inject(function(jsonDateStringConverter){
		var validDate='2015-06-08T18:17:09.063Z',
			currentDate=new Date().toJSON(),
			obj=jsonDateStringConverter({
				validDate:validDate,
				validCurrentDate:currentDate,
				invalidDate:'2015-06-32T18:17:09.063Z',
				datesInArray:[
					validDate,
					currentDate,
					'2015-06-32T18:17:09.063Z' // invalid
				]
			});

		/**
		 * Valid dates
		 */
		expect(obj.validDate).to.be.an.instanceof(Date);
		expect(obj.validDate.toJSON()).to.equal(validDate);

		expect(obj.validCurrentDate).to.be.an.instanceof(Date);
		expect(obj.validCurrentDate.toJSON()).to.equal(currentDate);

		expect(obj.datesInArray[0]).to.be.an.instanceof(Date);
		expect(obj.datesInArray[0].toJSON()).to.equal(validDate);

		expect(obj.datesInArray[1]).to.be.an.instanceof(Date);
		expect(obj.datesInArray[1].toJSON()).to.equal(currentDate);


		/**
		 * Invalid dates
		 */
		expect(obj.invalidDate).to.be.a('string');
		expect(obj.datesInArray[2]).to.be.a('string');
	}));
});
