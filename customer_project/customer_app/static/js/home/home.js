$(document).ready(function(){
    let $counter = 1;
	var Home = {
		Init: function(config) {
			this.config = config;
			this.BindEvents();
		},
        BindEvents: function() {
			let $this = this.config;

                $this.btn_save.on('click', this.ClickMe );
                $this.tbl_user.on('click', '.btn-update',this.Update );
                $this.tbl_user.on('click', '.btn-delete',this.Remove );
				$this.btn_add.on('click', this.OpenModal );
		},
		OpenModal: (e) => {
			let $self = Home.config;

			if($self.btn_save.val() == 'update') {
				$self.spn_modal_title.html('Edit Customer');
				$self.btn_clear.addClass('hidden');
			} else {
				$self.spn_modal_title.html('New Customer');
				$self.btn_clear.removeClass('hidden');
			}	
				$self.modal_customer.modal('show');
		},
		Update: (e) => {
			let $self = Home.config;
				$tr = $self.tbl_user.find('tr#' + e.target.getAttribute('data-rowid')),
				$td = $tr.find('td');

				$self.fname.val( $td.eq(0).text() );
				$self.lname.val( $td.eq(1).text() );
                $self.email.val( $td.eq(2).text() );
                $self.birthday.val( $td.eq(3).text() );		
				
				$self.btn_save.val('update');
				$self.btn_save.attr('data-rowid', e.target.getAttribute('data-rowid'));
				Home.OpenModal();
		},
		Remove: (e) => {
			let $self = Home.config;
				$self.tbl_user.find('tr#' + e.target.getAttribute('data-rowid')).remove();
		},
        ClickMe: () => {
			let $self = Home.config;
				
				if($self.btn_save.val() == 'save'){
					
					$self.tbl_user.append(`
						<tr id="${ $counter }">
							<td>${ $self.fname.val() }</td>
							<td>${ $self.lname.val() }</td>
                            <td>${ $self.email.val() }</td>
                            <td>${ $self.birthday.val() }</td>
							<td style="align: center;">
								<button class="btn btn-success btn-update" data-rowid="${ $counter }">update</button>
								<button class="btn btn-danger btn-delete" data-rowid="${ $counter }">delete</button>
							</td>
						</tr>				
					`);
					$counter++;
				}
				if($self.btn_save.val() == 'update'){
					let $rowid = $self.btn_save.attr('data-rowid');
					$tr = $self.tbl_user.find('tr#' + $rowid);
					$td = $tr.find('td');

					$td.eq(0).text( $self.fname.val() );
					$td.eq(1).text( $self.lname.val() );
                    $td.eq(2).text( $self.email.val() );
                    $td.eq(3).text( $self.birthday.val() );

					$self.btn_save.val('save');
				}

				$self.fname.val('');
				$self.lname.val('');
                $self.email.val('');
                $self.birthday.val('');
				$self.modal_customer.modal('hide');
					
				
        },
	 
	}

	Home.Init({
         btn_save 		: $('#btn-save')
        ,fname 			: $('#fname')
        ,lname 			: $('#lname')
        ,email			: $('#email')
        ,birthday		: $('#birthday')
        ,tbl_user		: $('#tbl-user')
		,btn_add    	: $('#btn-add')
		,modal_customer	: $('#modal-customer')
		,spn_modal_title: $('#spn-modal-title')
		,btn_clear 		: $('#btn-clear')
		,frm_customer	: $('#frm-customer')
    })    

})