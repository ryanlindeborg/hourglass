<template>
  <div>
    <section class="body">
      <h1>My Career</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" placeholder="Name" id="name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Date of Birth</label>
          <input type="text" placeholder="Date of Birth" id="dateOfBirth" class="form-control" />
        </div>
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" placeholder="Company" id="company" class="form-control" />
          <small id="companyHelp" class="form-text text-muted">Where do you currently work?</small>
        </div>
        <div class="form-group">
          <label for="position">Position</label>
          <input type="text" placeholder="Position" id="position" class="form-control" />
          <small id="positionHelp" class="form-text text-muted">
            e.g., Chief Puppy Officer, Vice President of Office Snacks
          </small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" placeholder="Industry" id="industry" class="form-control" />
          <small id="industryHelp" class="form-text text-muted">
            e.g., Healthcare, Technology, Energy
          </small>
        </div>
        <div class="form-group">
          <label for="college">College</label>
          <input type="text" placeholder="College" id="college" class="form-control" />
          <small id="collegeHelp" class="form-text text-muted">Your proud alma mater</small>
        </div>
        <div class="form-group">
          <label for="fieldOfStudy">Field of Study</label>
          <input type="text" placeholder="Field of Study" id="fieldOfStudy" class="form-control" />
          <small id="fieldOfStudyHelp" class="form-text text-muted">
            Your major - what are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation"
                 id="yearOfGraduation" class="form-control" />
          <small id="yearOfGraduationHelp" class="form-text text-muted">Only if applicable</small>
        </div>
        <div class="form-group">
          <label for="postGradSchool">Post-Grad School</label>
          <input type="text" placeholder="Post-Grad School"
                 id="postGradSchool" class="form-control" />
          <small id="postGradSchoolHelp" class="form-text text-muted">
            Your proud alma mater, take 2
          </small>
        </div>
        <div class="form-group">
          <label for="degree">Degree</label>
          <input type="text" placeholder="Degree"
                 id="degree" class="form-control" />
          <small id="degreeHelp" class="form-text text-muted">
            The fancy letter acronyms (MD, JD, MBA)
          </small>
        </div>
        <div class="form-group">
          <label for="fieldOfStudyPostGrad">Field of Study</label>
          <input type="text" placeholder="Field of Study"
                 id="fieldOfStudyPostGrad" class="form-control" />
          <small id="fieldOfStudyPostGradHelp" class="form-text text-muted">
            What are you officially a certified expert in?
          </small>
        </div>
        <div class="form-group">
          <label for="yearOfPostGradGraduation">Year of Graduation</label>
          <input type="text" placeholder="Year of Graduation"
                 id="yearOfPostGradGraduation" class="form-control" />
          <small id="yearOfPostGradGraduationHelp" class="form-text text-muted">
            Only if applicable
          </small>
        </div>
        <div class="form-group">
          <label for="firstCompanyPostCollege">First Company Post-College</label>
          <input type="text" placeholder="First Company Post-College"
                 id="firstCompanyPostCollege" class="form-control" />
          <small id="firstCompanyPostCollegeHelp" class="form-text text-muted">
            Who hired you as a freshly minted grad?
          </small>
        </div>
        <div class="form-group">
          <label for="firstPositionPostCollege">First Position Post-College</label>
          <input type="text" placeholder="Position"
                 id="firstPositionPostCollege" class="form-control" />
          <small id="firstPositionPostCollegeHelp" class="form-text text-muted">
            Title on your first business card
          </small>
        </div>
        <div class="form-group">
          <label for="dreamCompany">Dream Company</label>
          <input type="text" placeholder="Dream Company" id="dreamCompany" class="form-control" />
        </div>
        <div class="form-group">
          <label for="dreamPosition">Dream Position</label>
          <input type="text" placeholder="Dream Position" id="dreamPosition" class="form-control" />
        </div>
        <div class="form-group">
          <label for="dreamIndustry">Dream Industry</label>
          <input type="text" placeholder="Dream Industry" id="dreamIndustry" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
</script>

<style>
  section.body { padding: 1.5em; }
</style>
