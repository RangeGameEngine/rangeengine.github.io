import json
from jinja2 import Template
import os

store_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

def load_items(json_path):
    with open(json_path, 'r') as file:
        return json.load(file)

def load_template(template_path):
    with open(template_path, 'r', encoding='utf-8') as file:
        return Template(file.read())

def generate_pages(items, template, output_dir):
    products_dir = os.path.join(output_dir, 'products')
    if not os.path.exists(products_dir):
        os.makedirs(products_dir)

    for item in items:
        rendered_content = template.render(item=item)
        output_path = os.path.join(output_dir, 'products', f'id={item["id"]}' + '.html')
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(rendered_content)
            print(f'Page {output_path}.html build with success!')

if __name__ == "__main__":
    json_path = os.path.join(store_path, 'js', 'items.json')
    template_path = os.path.join(store_path, 'js', 'templates', 'item.html')
    output_dir = os.path.join(store_path)

    items = load_items(json_path)
    template = load_template(template_path)

    generate_pages(items, template, output_dir)