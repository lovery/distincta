echo "File renaming starts";
for f in `find ./build/ -name *.html`; do 
    echo "rename file ${f} to ${f%.html}";
    mv ${f} ${f%.html};
done;
echo "File renaming ended";
