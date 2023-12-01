<script>
    document.addEventListener("DOMContentLoaded", function () {
        var mp4Radio = document.getElementById("formCheck-1");
        var otherRadio = document.getElementById("formCheck-2");

        mp4Radio.addEventListener("change", function () {
            if (mp4Radio.checked) {
                otherRadio.disabled = true;
            }
        });

        otherRadio.addEventListener("change", function () {
            if (otherRadio.checked) {
                mp4Radio.disabled = true;
            }
        });
    });
</script>
