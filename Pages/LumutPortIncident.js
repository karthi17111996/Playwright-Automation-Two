class IncidentPage {
  constructor(page) {
    this.page = page;
    
    // Inga 'locationDropdown' nu define panrom (Note the spelling!)
    this.locationDropdown = page.locator('#eventLocation'); 
    
    // Unga matha locators...
    this.incidentManagementModule = page.locator('.nav-link.menuid-27'); 
    this.notificationButton = page.locator('.nav-link[class*="28"]');
    this.addNotification = page.locator('.btn.btn-sm.btn-primary.float-right');
    this.specificlocationDropdown = page.locator('#specificLocation')
    this.checkbox = page.locator('#eventRelatedCheck3')
    this.DateField = page.locator('#eventDate');
    this.Timefield = page.locator('#eventTime')
  }

  async openIncidentModule() {
    await this.incidentManagementModule.click();
  }

  async clickNotification() {
    await this.notificationButton.click();
  }

  async clickAddIncident() {
     await this.addNotification.click();
  }

  // Line 37 in your error:
  async selectLocation(locationName) {
    // FIX: Variable name exactly constructor-la irukura maari irukanum
    // And parameter 'locationName' ah ulla pass pannanum
    await this.locationDropdown.selectOption(locationName);
  }

  async selectSpecificLocation(specificlocationName) {

    await this.specificlocationDropdown.selectOption(specificlocationName);
  }

  async eventrelatedcheckbox() {

    await this.checkbox.check();
  } 

async selectDate(day) {
    // 1. First, date field-ah click panni calendar-ah open panrom
    await this.DateField.click();

    // 2. Ippo antha 'day' class ulla irukura specific date-ah click panrom
    // td.day nu pottal calendar-la irukura current month dates mattum select aagum
    await this.page.locator('.datepicker-days td').getByText(day, { exact: true }).click();


}

   
    
}





module.exports = { IncidentPage };