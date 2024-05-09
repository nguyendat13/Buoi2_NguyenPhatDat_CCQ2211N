const danhSachMonHoc = document.getElementById('danh-sach-mon-hoc');
        const formThemMonHoc = document.getElementById('form-them-mon-hoc');

        formThemMonHoc.addEventListener('submit', function(event) {
            event.preventDefault();

            const tenMonHoc = document.getElementById('ten-mon-hoc').value.trim(); // Xóa whitespace

            if (!tenMonHoc) {
                alert('Vui lòng nhập tên môn học!');
                return;
            }

            const li = document.createElement('li');
            li.textContent = tenMonHoc;

            const buttonXoa = document.createElement('button');
            buttonXoa.textContent = 'Xóa';
            buttonXoa.addEventListener('click', function() {
                danhSachMonHoc.removeChild(li);
            });

            li.appendChild(buttonXoa);

            danhSachMonHoc.appendChild(li);

            formThemMonHoc.reset();
        });