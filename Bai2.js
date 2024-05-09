const subjectList = document.getElementById('subjectList');
const subjectForm = document.getElementById('subjectForm');

subjectForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const subjectName = document.getElementById('subjectName').value.trim();

  if (subjectName === '') {
    alert('Vui lòng nhập tên môn học.');
    return;
  }

  const newSubjectItem = document.createElement('li');
  newSubjectItem.textContent = subjectName;
  newSubjectItem.addEventListener('click', function() {
    if (confirm('Bạn có muốn xóa môn học này?')) {
      subjectList.removeChild(newSubjectItem);
    }
    
  });

  subjectList.appendChild(newSubjectItem);
  subjectForm.reset();
  
});


